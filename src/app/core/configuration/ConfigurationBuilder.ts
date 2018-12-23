import { IItem } from '../item/item';
import { Select } from '../item/Select';
import { Count } from '../item/Count';
import { Activable } from '../item/Activable';
import { IConfiguration } from './base/Configuration';
import { Configuration } from './Configuration';

export class ConfigurationBuilder {
    private _items: Array<IItem> = [];

    private contructor() { }

    public static create(): ConfigurationBuilder {
        return new ConfigurationBuilder();
    }
    
    public addSelect(id: string, betweenValues: Array<unknown>): ConfigurationBuilder {
        this._items.push(new Select(id, betweenValues));
        return this;
    }

    public addCount(id: string, from: number, to: number): ConfigurationBuilder {
        this._items.push(new Count(id, from, to));
        return this;
    }

    public addActivable(id: string): ConfigurationBuilder {
        this._items.push(new Activable(id));
        return this;
    }

    public addItem(item: IItem): ConfigurationBuilder {
        this._items.push(item);
        return this;
    }

    public addItems(items: Array<IItem>): ConfigurationBuilder {
        items.forEach(item => this._items.push(item));
        return this;
    }

    public build(): IConfiguration {
        const config: IConfiguration = new Configuration();
        config.items = this._items;
        return config;
    }
}
