import { ITileParser } from "../../configuration/json/parsers/base/tile-parser";
import { IItem } from '../../core/item/Item';
import { Activable } from '../../core/item/Activable';
import { Select } from '../../core/item/Select';
import { DungeonTile } from './dungeon-tile';
import { Dungeon } from '../ids/Dungeon';

export class DungeonTileParser implements ITileParser {
    public type: string = 'Dungeon';

    public parse(config: { id: Dungeon; blocked: boolean; }): Array<IItem> {
        const dungeonTile: DungeonTile = new DungeonTile(config.id);
        const parsedItems: Array<IItem> = [dungeonTile, dungeonTile.reward];
        
        if (config.blocked){
            dungeonTile.setBlocked();
            parsedItems.push(dungeonTile.block);
        }

        return parsedItems;
    }
}