import { Subject, Observable } from 'rxjs';
import { IItem } from './Item';

export abstract class UpdatableItem implements IItem {
    public abstract id: string;
    public onUpdate: Observable<this>;

    private _onUpdateEvent: Subject<this> = new Subject();

    constructor() {
        this.onUpdate = this._onUpdateEvent.asObservable();
    }

    protected _emitChange(): void {
        this._onUpdateEvent.next(this);
    }
}