import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComebackComponent } from './icon-comeback.component';

describe('IconComebackComponent', () => {
  let component: IconComebackComponent;
  let fixture: ComponentFixture<IconComebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconComebackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
