import { IItem } from './Item';
import { Select } from "./Select";
import { UpdatableItem } from './updatable-item';

export class Count extends UpdatableItem {
    public type: string = 'Count';
    public id: string;

    public get state(): number {
        return this._select.state;
    }

    public set state(value: number) {
        this._select.state = value;
    }

    private _select: Select<number>;

    constructor(id: string, from: number, to: number) {
        super();
        this._select = new Select<number>(`${id}_internal_select`, this._createNumberList(from, to));
        this._select.onUpdate.subscribe(() => this._emitChange());
        this.id = id;
    }

    private _createNumberList(from: number, to: number): Array<number> {
        const list: Array<number> = [];
        for (let i = from; i <= to; i++) {
            list.push(i);
        }
        return list;
    }
}
