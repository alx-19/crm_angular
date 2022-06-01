import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListCustomersComponent } from './page-list-customers.component';

describe('PageListCustomersComponent', () => {
  let component: PageListCustomersComponent;
  let fixture: ComponentFixture<PageListCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
