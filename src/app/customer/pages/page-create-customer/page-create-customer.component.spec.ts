import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateCustomerComponent } from './page-create-customer.component';

describe('PageCreateCustomerComponent', () => {
  let component: PageCreateCustomerComponent;
  let fixture: ComponentFixture<PageCreateCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
