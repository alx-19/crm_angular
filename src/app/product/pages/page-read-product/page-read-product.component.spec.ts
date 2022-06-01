import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReadProductComponent } from './page-read-product.component';

describe('PageReadProductComponent', () => {
  let component: PageReadProductComponent;
  let fixture: ComponentFixture<PageReadProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReadProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReadProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
