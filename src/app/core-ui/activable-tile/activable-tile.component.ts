import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Activable } from 'src/app/core/item/Activable';
import { ImageRepository } from '../image-repository/image-repository';
import { Observable, of, concat } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'activable-tile',
  templateUrl: './activable-tile.component.html',
  styleUrls: ['./activable-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivableTileComponent {
  @Input()
  public item: Activable;
  
  public image: string;
  public state$: Observable<boolean>;

  private _imageRepo: ImageRepository;

  constructor(imageRepo: ImageRepository) {
    this._imageRepo = imageRepo;
  }

  public ngOnInit(): void {
    this.image = this._imageRepo.getImageForId(this.item.id);
    this.state$ = concat(
      of(this.item.isActive),
      this.item.onUpdate.pipe(map(item => item.isActive))
    );
  }
}
