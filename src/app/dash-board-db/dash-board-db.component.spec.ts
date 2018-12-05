import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardDbComponent } from './dash-board-db.component';

describe('DashBoardDbComponent', () => {
  let component: DashBoardDbComponent;
  let fixture: ComponentFixture<DashBoardDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
