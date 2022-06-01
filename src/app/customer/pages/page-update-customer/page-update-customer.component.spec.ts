import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateCustomerComponent } from './page-update-customer.component';

describe('PageUpdateCustomerComponent', () => {
  let component: PageUpdateCustomerComponent;
  let fixture: ComponentFixture<PageUpdateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
