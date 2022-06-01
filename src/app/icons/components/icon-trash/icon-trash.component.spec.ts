import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconTrashComponent } from './icon-trash.component';

describe('IconTrashComponent', () => {
  let component: IconTrashComponent;
  let fixture: ComponentFixture<IconTrashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconTrashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconTrashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
