import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivableTileComponent } from './activable-tile/activable-tile.component';
import { SelectTileComponent } from './select-tile/select-tile.component';
import { ImageRepository } from './image-repository/image-repository';

@NgModule({
  declarations: [ActivableTileComponent, SelectTileComponent],
  imports: [
    CommonModule
  ],
  exports: [ActivableTileComponent, SelectTileComponent],
  providers: [ImageRepository]
})
export class CoreUiModule { }
