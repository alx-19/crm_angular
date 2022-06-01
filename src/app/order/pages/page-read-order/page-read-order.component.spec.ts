import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReadOrderComponent } from './page-read-order.component';

describe('PageReadOrderComponent', () => {
  let component: PageReadOrderComponent;
  let fixture: ComponentFixture<PageReadOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReadOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReadOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
