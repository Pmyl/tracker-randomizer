import { Observable } from 'rxjs';

export interface IItem {
    id: string;
    type: string;
    onUpdate: Observable<this>;
}
