import { IItem } from './Item';
import { UpdatableItem } from './updatable-item';
export class Select<TValue = unknown> extends UpdatableItem {
    public type: string = 'Select';
    public states: Array<TValue>;
    public id: string;

    public get state(): TValue {
        return this._state;
    }

    public set state(value: TValue) {
        if (!this._statesMap.has(value)) {
            throw new Error(`${value} is not an accepted state. Select state can be set only between ${this.states.join(', ')} values.`);
        }

        if (this._state !== value) {
            this._state = value;
            this._emitChange();
        }
    }

    private _statesMap: Map<TValue, boolean>;

    private _state: TValue;

    constructor(id: string, states: Array<TValue>) {
        super();
        this.id = id;
        this.states = states;

        this._statesMap = states.reduce((tot: Map<TValue, boolean>, value: TValue) => {
            tot.set(value, true);
            return tot;
        }, new Map<TValue, boolean>());

        this.state = states[0];
    }
}
