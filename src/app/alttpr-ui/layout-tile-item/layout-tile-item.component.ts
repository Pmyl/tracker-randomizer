import { Component, OnInit, Input } from '@angular/core';
import { IItem } from 'src/app/core/item/Item';

@Component({
  selector: 'layout-tile-item',
  templateUrl: './layout-tile-item.component.html',
  styleUrls: ['./layout-tile-item.component.scss']
})
export class LayoutTileItemComponent {
  @Input()
  public item: IItem;
}
