import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPreviousPageComponent } from './icon-previous-page.component';

describe('IconPreviousPageComponent', () => {
  let component: IconPreviousPageComponent;
  let fixture: ComponentFixture<IconPreviousPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPreviousPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPreviousPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
