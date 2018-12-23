import { Select } from '../../../core/item/Select';
import { ITileParser } from './base/tile-parser';

export class SelectTileParser implements ITileParser {
    public type: string = 'Select';
    public parse(config: {
        id: string;
        states: Array<string>;
    }): Array<Select> {
        return [new Select(config.id, config.states)];
    }
}
