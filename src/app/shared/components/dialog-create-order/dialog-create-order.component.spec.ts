import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateOrderComponent } from './dialog-create-order.component';

describe('DialogCreateOrderComponent', () => {
  let component: DialogCreateOrderComponent;
  let fixture: ComponentFixture<DialogCreateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
