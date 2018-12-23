import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivableTileComponent } from './activable-tile.component';

describe('ActivableTileComponent', () => {
  let component: ActivableTileComponent;
  let fixture: ComponentFixture<ActivableTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivableTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivableTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
