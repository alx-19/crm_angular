import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSquarePenComponent } from './icon-square-pen.component';

describe('IconSquarePenComponent', () => {
  let component: IconSquarePenComponent;
  let fixture: ComponentFixture<IconSquarePenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconSquarePenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSquarePenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
