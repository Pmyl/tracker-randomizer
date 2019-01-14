import { Component, Input } from '@angular/core';
import { IConfiguration } from 'src/app/core/configuration/base/Configuration';
import { Item } from 'src/app/alttpr/ids/Item';
import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { SwordState } from 'src/app/alttpr/ids/SwordState';
import { Utils } from 'src/app/alttpr/ids/Utils';
import { IConfigurationFetcher } from 'src/app/configuration/base/configuration-fetcher';
import { ILayoutFetcher } from 'src/app/core-ui/layout/fetcher/layout-fetcher';
import { ILayout, TileId, TileType, ITile, ILayoutTileRaw, IItemTile, ITwinTile } from 'src/app/core-ui/layout/layout';
import { IItem } from 'src/app/core/item/Item';
import { isObject } from 'util';

export interface ILayoutItemTile {
  item: IItem;
  type: TileType.Item;
}

export interface ILayoutTwinTile {
  items: [IItem, IItem];
  type: TileType.Twin;
}

type ILayoutTile = ILayoutItemTile | ILayoutTwinTile;

@Component({
  selector: 'standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
  @Input()
  public config: IConfiguration;

  public tiles: Array<ILayoutTile>;
  public isReady: boolean = false;
  public TileType: typeof TileType = TileType;

  private _layout: ILayout;
  private _layoutFetcher: ILayoutFetcher;

  constructor(layoutFetcher: ILayoutFetcher) {
    this._layoutFetcher = layoutFetcher;
  }

  public async ngOnChanges() {
    this._layout = await this._layoutFetcher.getLayout();

    this.tiles = [];
    this._layout.tilesOrder.forEach((tileConfig: ILayoutTileRaw) => {
      if (this._isConfig(tileConfig)) {
        this.tiles.push(this._rawToTile(tileConfig));
      } else {
        this.tiles.push({
          item: this.config.getItem(tileConfig),
          type: TileType.Item
        });
      }
    });

    this.isReady = true;
  }

  private _isConfig(tileConfig: TileId | ITile): tileConfig is ITile {
    return isObject(tileConfig);
  }

  private _rawToTile(tile: ITile): ILayoutTile {
    switch(tile.type) {
      case TileType.Item:
        return {
          item: this.config.getItem(tile.item),
          type: TileType.Item
        };
      case TileType.Twin:
        return {
          items: tile.items.map(x => this.config.getItem(x)) as [IItem, IItem],
          type: TileType.Twin
        };
    }
  }
}