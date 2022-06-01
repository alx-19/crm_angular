import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconOrderComponent } from './icon-order.component';

describe('IconOrderComponent', () => {
  let component: IconOrderComponent;
  let fixture: ComponentFixture<IconOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
