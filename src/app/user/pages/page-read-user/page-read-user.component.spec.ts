import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReadUserComponent } from './page-read-user.component';

describe('PageReadUserComponent', () => {
  let component: PageReadUserComponent;
  let fixture: ComponentFixture<PageReadUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageReadUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReadUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
