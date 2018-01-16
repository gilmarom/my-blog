import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturantListComponent } from './returant-list.component';

describe('ReturantListComponent', () => {
  let component: ReturantListComponent;
  let fixture: ComponentFixture<ReturantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
