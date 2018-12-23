import { Component, Input } from '@angular/core';
import { DungeonTile } from 'src/app/alttpr/tiles/dungeon-tile';

@Component({
  selector: 'dungeon-tile',
  templateUrl: './dungeon-tile.component.html',
  styleUrls: ['./dungeon-tile.component.scss']
})
export class DungeonTileComponent {
  @Input()
  public item: DungeonTile;
}
