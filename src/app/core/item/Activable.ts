import { UpdatableItem } from './updatable-item';

export class Activable extends UpdatableItem {
    public get isActive(): boolean {
        return this._isActive
    }
    public id: string;

    private _isActive: boolean = false;

    constructor(id: string) {
        super();
        this.id = id;
    }

    public toggle(): void {
        this._isActive = !this._isActive;
        this._emitChange();
    }

    public setActive(isActive: boolean): void {
        if (this._isActive !== isActive) {
            this._isActive = isActive;
            this._emitChange();
        }
    }
}
