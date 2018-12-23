import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonTileComponent } from './dungeon-tile.component';

describe('DungeonTileComponent', () => {
  let component: DungeonTileComponent;
  let fixture: ComponentFixture<DungeonTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
