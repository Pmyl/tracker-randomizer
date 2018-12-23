import { Dungeon } from 'src/app/alttpr/ids/Dungeon';
import { Utils } from 'src/app/alttpr/ids/Utils';
import { MultiplayerService } from './multiplayer';

export class HardcodedMultiplayerService implements MultiplayerService {
  public getAllCommonActivables(): Promise<string[]> {
    return Promise.resolve([]);
  }
  
  public getAllCommonSelects(): Promise<Array<string>> {
    return Promise.resolve([
      Utils.dungeonRewardId(Dungeon.EasternPalace),
      Utils.dungeonRewardId(Dungeon.MiseryMire),
      Utils.dungeonNeededItemId(Dungeon.MiseryMire)
    ]);
  }
}