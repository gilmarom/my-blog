import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleTutorialComponent } from './style-tutorial.component';

describe('StyleTutorialComponent', () => {
  let component: StyleTutorialComponent;
  let fixture: ComponentFixture<StyleTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
