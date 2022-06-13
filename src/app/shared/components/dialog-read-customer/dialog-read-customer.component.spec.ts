import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReadCustomerComponent } from './dialog-read-customer.component';

describe('DialogReadCustomerComponent', () => {
  let component: DialogReadCustomerComponent;
  let fixture: ComponentFixture<DialogReadCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReadCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReadCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
