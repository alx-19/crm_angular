import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUpdateUserComponent } from './page-update-user.component';

describe('PageUpdateUserComponent', () => {
  let component: PageUpdateUserComponent;
  let fixture: ComponentFixture<PageUpdateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageUpdateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
