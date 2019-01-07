import { Component, Input } from '@angular/core';
import { IConfiguration } from 'src/app/core/configuration/base/Configuration';
import { Item } from 'src/app/alttpr/ids/Item';
import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { SwordState } from 'src/app/alttpr/ids/SwordState';
import { Utils } from 'src/app/alttpr/ids/Utils';
import { IConfigurationFetcher } from 'src/app/configuration/base/configuration-fetcher';
import { ILayoutFetcher } from 'src/app/core-ui/layout/fetcher/layout-fetcher';
import { ILayout } from 'src/app/core-ui/layout/layout';
import { IItem } from 'src/app/core/item/Item';

@Component({
  selector: 'standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
  @Input()
  public config: IConfiguration;

  public tiles: Array<IItem>;
  public isReady: boolean = false;

  private _layout: ILayout;
  private _layoutFetcher: ILayoutFetcher;

  constructor(layoutFetcher: ILayoutFetcher) {
    this._layoutFetcher = layoutFetcher;
  }

  public async ngOnChanges() {
    this._layout = await this._layoutFetcher.getLayout();

    this.tiles = [];
    this._layout.tilesOrder.forEach((tileId: string) => {
      this.tiles.push(this.config.getItem(tileId));
    });

    this.isReady = true;
  }
}