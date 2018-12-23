import { IItem } from '../../item/item';

export interface IConfiguration {
    items: Array<IItem>;
    getItem(id: string): IItem;
    setItem(item: IItem): void;
}