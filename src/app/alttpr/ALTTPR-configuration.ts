import { IConfiguration } from '../core/configuration/base/Configuration';
import { ConfigurationBuilder } from "../core/configuration/ConfigurationBuilder";
import { Item } from './ids/Item';
import { SwordState } from './ids/SwordState';
import { Dungeon } from './ids/Dungeon';
import { IConfigurationFetcher } from '../configuration/base/configuration-fetcher';
import { DungeonTile } from './tiles/dungeon-tile';

export class ALTTPRConfiguration implements IConfigurationFetcher {
    public config: IConfiguration;

    constructor() {
        const builder: ConfigurationBuilder = ConfigurationBuilder.create();

        this._addSword(builder);
        this._addDungeon(builder, Dungeon.EasternPalace);
        this._addBlockedDungeon(builder, Dungeon.MiseryMire);
        builder.addActivable(Item.Bow);
        builder.addActivable(Item.BlueBoomerang);
        builder.addCount(Item.Bottle, 0, 4);

        this.config = builder.build();
    }

    public getConfig(): Promise<IConfiguration> {
        return Promise.resolve(this.config);
    }

    private _addSword(builder: ConfigurationBuilder): void {
        builder.addSelect(Item.Sword, [
            SwordState.NotFound,
            SwordState.Hero,
            SwordState.Master,
            SwordState.Tempered,
            SwordState.Gold
        ]);
    }

    private _addDungeon(builder: ConfigurationBuilder, dungeon: Dungeon): void {
        builder.addItem(new DungeonTile(dungeon));
    }

    private _addBlockedDungeon(builder: ConfigurationBuilder, dungeon: Dungeon): void {
        const dungeonTile = new DungeonTile(dungeon);
        dungeonTile.setBlocked();

        builder.addItem(dungeonTile);
    }
}