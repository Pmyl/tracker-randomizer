import { Dungeon } from './Dungeon';

export class Utils {
    public static dungeonRewardId(dungeon: Dungeon): string {
        return `${dungeon}_Reward`;
    }
    
    public static dungeonNeededItemId(dungeon: Dungeon): string {
        return `${dungeon}_EntranceNeededItem`;
    }
}