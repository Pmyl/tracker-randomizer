import { Select } from '../../../core/item/Select';
import { ITileParser } from './base/tile-parser';

export class SelectTileParser implements ITileParser {
    public type: string = 'Select';
    public parse(config: {
        id: string;
        states: Array<string>;
        initialState: string;
    }): Array<Select> {
        const tile = new Select(config.id, config.states);
        if (config.initialState) {
            tile.state = config.initialState;
        }

        return [tile];
    }
}
