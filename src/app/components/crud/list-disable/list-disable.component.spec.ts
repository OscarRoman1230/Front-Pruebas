import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDisableComponent } from './list-disable.component';

describe('ListDisableComponent', () => {
  let component: ListDisableComponent;
  let fixture: ComponentFixture<ListDisableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDisableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
