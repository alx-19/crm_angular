import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCustomerModalComponent } from './card-customer-modal.component';

describe('CardCustomerModalComponent', () => {
  let component: CardCustomerModalComponent;
  let fixture: ComponentFixture<CardCustomerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCustomerModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCustomerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
