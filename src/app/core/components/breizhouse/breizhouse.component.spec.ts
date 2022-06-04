import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreizhouseComponent } from './breizhouse.component';

describe('BreizhouseComponent', () => {
  let component: BreizhouseComponent;
  let fixture: ComponentFixture<BreizhouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreizhouseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreizhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
