import { MultiplayerService } from './multiplayer';

interface MultiplayerSharedItems {
  select: Array<string>;
  activable: Array<string>;
}

export class JsonMultiplayerService implements MultiplayerService {
  private _filename: string;
  private _sharedItems: MultiplayerSharedItems;

  constructor(filename: string) {
    this._filename = filename;
  }

  public async getAllCommonSelects(): Promise<Array<string>> {
    const sharedItems: MultiplayerSharedItems = await this._fetchSharedItems();
    return sharedItems.select || [];
  }

  public async getAllCommonActivables(): Promise<Array<string>> {
    const sharedItems: MultiplayerSharedItems = await this._fetchSharedItems();
    return sharedItems.activable || [];
  }

  private async _fetchSharedItems(): Promise<MultiplayerSharedItems> {
    if (!this._sharedItems)
      this._sharedItems = await (await fetch(this._filename)).json();
    
    return this._sharedItems;
  }
}