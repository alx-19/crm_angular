import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCreateUserComponent } from './page-create-user.component';

describe('PageCreateUserComponent', () => {
  let component: PageCreateUserComponent;
  let fixture: ComponentFixture<PageCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
