import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCustomerComponent } from './icon-customer.component';

describe('IconCustomerComponent', () => {
  let component: IconCustomerComponent;
  let fixture: ComponentFixture<IconCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
