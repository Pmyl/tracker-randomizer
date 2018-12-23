import { Observable } from 'rxjs';

export interface IItem {
    id: string;
    onUpdate: Observable<this>;
}
