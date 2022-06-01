import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProfilMenuComponent } from './nav-profil-menu.component';

describe('NavProfilMenuComponent', () => {
  let component: NavProfilMenuComponent;
  let fixture: ComponentFixture<NavProfilMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProfilMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavProfilMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
