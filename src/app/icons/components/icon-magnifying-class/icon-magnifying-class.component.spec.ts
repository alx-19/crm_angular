import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconMagnifyingClassComponent } from './icon-magnifying-class.component';

describe('IconMagnifyingClassComponent', () => {
  let component: IconMagnifyingClassComponent;
  let fixture: ComponentFixture<IconMagnifyingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconMagnifyingClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconMagnifyingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
