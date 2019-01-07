import { Select } from '../core/item/Select';
import { Utils } from './ids/Utils';
import { DungeonReward } from './ids/DungeonReward';
import { Dungeon } from './ids/Dungeon';
import { DungeonEntranceItem } from './ids/DungeonEntranceItem';

export class ALTTPConfigHelper {
    public static createDungeonRewardSelect(dungeonId: Dungeon): Select {
        return new Select(Utils.dungeonRewardId(dungeonId), [
            DungeonReward.Unknown,
            DungeonReward.Crystal,
            DungeonReward.RedCrystal,
            DungeonReward.Pendant,
            DungeonReward.GreenPendant
        ]);
    }

    public static createDungeonBlockSelect(dungeonId: Dungeon): Select {
        return new Select(Utils.dungeonNeededItemId(dungeonId), [
            DungeonEntranceItem.Unknown,
            DungeonEntranceItem.Bombos,
            DungeonEntranceItem.Ether,
            DungeonEntranceItem.Quake
        ]);
    }
}