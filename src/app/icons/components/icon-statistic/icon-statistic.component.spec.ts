import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStatisticComponent } from './icon-statistic.component';

describe('IconStatisticComponent', () => {
  let component: IconStatisticComponent;
  let fixture: ComponentFixture<IconStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
