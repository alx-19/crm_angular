import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReadCustomerComponent } from './page-read-customer.component';

describe('PageReadCustomerComponent', () => {
  let component: PageReadCustomerComponent;
  let fixture: ComponentFixture<PageReadCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReadCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReadCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
