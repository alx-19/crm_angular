import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHomeComponent } from './icon-home.component';

describe('IconHomeComponent', () => {
  let component: IconHomeComponent;
  let fixture: ComponentFixture<IconHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
