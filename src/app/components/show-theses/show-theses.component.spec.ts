import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowThesesComponent } from './show-theses.component';

describe('ShowThesesComponent', () => {
  let component: ShowThesesComponent;
  let fixture: ComponentFixture<ShowThesesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowThesesComponent]
    });
    fixture = TestBed.createComponent(ShowThesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
