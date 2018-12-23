import { Component, OnInit } from '@angular/core';
import { IConfiguration } from 'src/app/core/configuration/base/Configuration';
import { IConfigurationFetcher } from 'src/app/configuration/base/configuration-fetcher';
import { DungeonReward } from 'src/app/alttpr/ids/DungeonReward';
import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { DungeonTile } from 'src/app/alttpr/tiles/dungeon-tile';
import { Utils } from 'src/app/alttpr/ids/Utils';
import { Select } from 'src/app/core/item/Select';
import { MultiplayerService } from './service/multiplayer';
import { Activable } from 'src/app/core/item/Activable';
import { IItem } from 'src/app/core/item/Item';

interface Type<T> extends Function {
  new (...args: any[]): T
}

@Component({
  selector: 'multiplayer',
  templateUrl: './multiplayer.component.html',
  styleUrls: ['./multiplayer.component.scss']
})
export class MultiplayerComponent {
  public config1: IConfiguration;
  public config2: IConfiguration;

  private _configRepository: IConfigurationFetcher;
  private _multiplayerService: MultiplayerService;

  constructor(configuration: IConfigurationFetcher, multiplayerService: MultiplayerService) {
    this._configRepository = configuration;
    this._multiplayerService = multiplayerService;
  }

  public async ngOnInit() {
    this.config1 = await this._configRepository.getConfig();
    this.config2 = await this._configRepository.getConfig();

    const commonSelects: Array<string> = await this._multiplayerService.getAllCommonSelects();
    this._connectItemCategory(Select, "Select", commonSelects, MultiplayerComponent._setSelectState);

    const commonActivables: Array<string> = await this._multiplayerService.getAllCommonActivables();
    this._connectItemCategory(Activable, "Activable", commonActivables, MultiplayerComponent._setActivableState);
  }

  private _connectItemCategory<TItem extends IItem>(
    category: Type<TItem>,
    categoryName: string,
    commons: Array<string>,
    setFn: (source: TItem, target: TItem) => void
  ): void {
    commons.forEach(commonState => {
      const itemConfig1 = this.config1.getItem(commonState);
      const itemConfig2 = this.config2.getItem(commonState);

      if (!(itemConfig1 instanceof category) || !(itemConfig2 instanceof category)) {
        throw new Error(`${commonState} needs to be a ${categoryName} item`);
      }

      this._connectItems(itemConfig1, itemConfig2, setFn);
    });
  }

  private _connectItems<TItem extends IItem>(item1: TItem, item2: TItem, setFn: (source: TItem, target: TItem) => void) {
    item1.onUpdate.subscribe((source: TItem) => {
      setFn(source, item2);
    });

    item2.onUpdate.subscribe((source: TItem) => {
      setFn(source, item1);
    });
  }

  private static _setSelectState(source: Select, target: Select): void {
    target.state = source.state;
  }

  private static _setActivableState(source: Activable, target: Activable): void {
    target.setActive(source.isActive);
  }
}
