import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/core/item/Item';

@Component({
  selector: 'layout-tile-twin',
  templateUrl: './layout-tile-twin.component.html',
  styleUrls: ['./layout-tile-twin.component.scss']
})
export class LayoutTileTwinComponent {
  @Input()
  public items: [IItem, IItem];
}
