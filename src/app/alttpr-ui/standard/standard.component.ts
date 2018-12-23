import { Component, Input } from '@angular/core';
import { IConfiguration } from 'src/app/core/configuration/base/Configuration';
import { Item } from 'src/app/alttpr/ids/Item';
import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { SwordState } from 'src/app/alttpr/ids/SwordState';
import { Utils } from 'src/app/alttpr/ids/Utils';
import { IConfigurationFetcher } from 'src/app/configuration/base/configuration-fetcher';

@Component({
  selector: 'standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.scss']
})
export class StandardComponent {
  @Input()
  public config: IConfiguration;

  public Item: typeof Item = Item;
  public Dungeon: typeof Dungeon = Dungeon;
  public SwordState: typeof SwordState = SwordState;
}