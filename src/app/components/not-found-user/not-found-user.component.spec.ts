import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundUserComponent } from './not-found-user.component';

describe('NotFoundUserComponent', () => {
  let component: NotFoundUserComponent;
  let fixture: ComponentFixture<NotFoundUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFoundUserComponent]
    });
    fixture = TestBed.createComponent(NotFoundUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
