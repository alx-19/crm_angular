import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateCustomerComponent } from './dialog-create-customer.component';

describe('DialogCreateCustomerComponent', () => {
  let component: DialogCreateCustomerComponent;
  let fixture: ComponentFixture<DialogCreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
