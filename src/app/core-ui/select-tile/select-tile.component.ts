import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Select } from 'src/app/core/item/Select';
import { ImageRepository } from '../image-repository/image-repository';
import { concat, of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'select-tile',
  templateUrl: './select-tile.component.html',
  styleUrls: ['./select-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectTileComponent {
  @Input()
  public item: Select;
  
  public images: { [id: string]: string };
  public state$: Observable<unknown>;

  private _imageRepo: ImageRepository;

  constructor(imageRepo: ImageRepository) {
    this._imageRepo = imageRepo;
  }

  public ngOnInit(): void {
    this.images = this._getStatesImages();
    this.state$ = concat(
      of(this.item.state),
      this.item.onUpdate.pipe(map(item => item.state))
    );
  }

  private _getStatesImages(): { [id: string]: string } {
    return this.item.states.reduce<{ [id: string]: string }>((tot, state: string) => {
      tot[state] = this._imageRepo.getImageForId(state);
      return tot;
    }, {});
  }

  public isFound(state: string): boolean {
    return this.item.states[0] !== state;
  }

  public next(): void {
    const index: number = this.item.states.indexOf(this.item.state);
    const length: number = this.item.states.length;

    this.item.state = this.item.states[Math.min((index + 1), length - 1)];
  }

  public previous(): void {
    const index: number = this.item.states.indexOf(this.item.state);

    this.item.state = this.item.states[Math.max((index - 1), 0)];
  }
}
