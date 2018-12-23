import { IItem } from '../../../../core/item/Item';
export interface ITileParser {
    type: string;
    parse(config: any): Array<IItem>;
}
