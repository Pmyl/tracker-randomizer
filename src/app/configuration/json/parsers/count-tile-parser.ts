import { Count } from '../../../core/item/Count';
import { ITileParser } from './base/tile-parser';

export class CountTileParser implements ITileParser {
    public type: string = 'Count';
    public parse(config: {
        id: string;
        from: number;
        to: number;
    }): Array<Count> {
        return [new Count(config.id, config.from, config.to)];
    }
}
