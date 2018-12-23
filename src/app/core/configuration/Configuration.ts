import { IItem } from '../item/item';
import { IConfiguration } from './base/Configuration';

export class Configuration implements IConfiguration {
    public items: Array<IItem>;
    public getItem(id: string): IItem {
        const item: IItem = this.items.find(item => item.id === id);
        if (!item) {
            throw new Error("Configuration item not found with id " + id);
        }
        return item;
    }
    public setItem(itemToSet: IItem): void {
        const index: number = this.items.findIndex(item => item.id === itemToSet.id);
        if (index > -1) {
            this.items.splice(index, 1, itemToSet);
        }
        else {
            this.items.push(itemToSet);
        }
    }
}
