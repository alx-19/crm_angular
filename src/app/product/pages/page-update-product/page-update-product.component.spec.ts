import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateProductComponent } from './page-update-product.component';

describe('PageUpdateProductComponent', () => {
  let component: PageUpdateProductComponent;
  let fixture: ComponentFixture<PageUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
