import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodePythonComponent } from './node-python.component';

describe('NodePythonComponent', () => {
  let component: NodePythonComponent;
  let fixture: ComponentFixture<NodePythonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodePythonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodePythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
