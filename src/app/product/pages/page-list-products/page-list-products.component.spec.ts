import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListProductsComponent } from './page-list-products.component';

describe('PageListProductsComponent', () => {
  let component: PageListProductsComponent;
  let fixture: ComponentFixture<PageListProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
