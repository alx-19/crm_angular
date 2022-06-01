import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLogOutComponent } from './icon-log-out.component';

describe('IconLogOutComponent', () => {
  let component: IconLogOutComponent;
  let fixture: ComponentFixture<IconLogOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLogOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLogOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
