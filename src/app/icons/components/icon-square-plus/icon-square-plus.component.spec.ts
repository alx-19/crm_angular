import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSquarePlusComponent } from './icon-square-plus.component';

describe('IconSquarePlusComponent', () => {
  let component: IconSquarePlusComponent;
  let fixture: ComponentFixture<IconSquarePlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSquarePlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSquarePlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
