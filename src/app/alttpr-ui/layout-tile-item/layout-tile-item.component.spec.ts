import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTileItemComponent } from './layout-tile-item.component';

describe('LayoutTileItemComponent', () => {
  let component: LayoutTileItemComponent;
  let fixture: ComponentFixture<LayoutTileItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTileItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTileItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
