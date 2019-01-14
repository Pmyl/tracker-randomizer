import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTileTwinComponent } from './layout-tile-twin.component';

describe('LayoutTileTwinComponent', () => {
  let component: LayoutTileTwinComponent;
  let fixture: ComponentFixture<LayoutTileTwinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTileTwinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTileTwinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
