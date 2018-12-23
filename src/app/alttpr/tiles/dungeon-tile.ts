import { Activable } from 'src/app/core/item/Activable';
import { Select } from 'src/app/core/item/Select';
import { ALTTPConfigHelper } from '../ALTTPR-config-helper';
import { Dungeon } from '../ids/Dungeon';

export class DungeonTile extends Activable {
    public reward: Select;
    public block?: Select;

    constructor(id: Dungeon) {
        super(id);
        this.reward = ALTTPConfigHelper.createDungeonRewardSelect(id);
        this.reward.onUpdate.subscribe(() => this._emitChange());
    }

    public setBlocked(): void {
        this.block = ALTTPConfigHelper.createDungeonBlockSelect(this.id as Dungeon);
        this.block.onUpdate.subscribe(() => this._emitChange());
    }
}