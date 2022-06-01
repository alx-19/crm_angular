import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateOrderComponent } from './page-create-order.component';

describe('PageCreateOrderComponent', () => {
  let component: PageCreateOrderComponent;
  let fixture: ComponentFixture<PageCreateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
