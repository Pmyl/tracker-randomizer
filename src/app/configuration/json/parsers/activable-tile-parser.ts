import { Activable } from '../../../core/item/Activable';
import { ITileParser } from './base/tile-parser';

export class ActivableTileParser implements ITileParser {
    public type: string = 'Activable';
    public parse(config: {
        id: string;
    }): Array<Activable> {
        return [new Activable(config.id)];
    }
}
