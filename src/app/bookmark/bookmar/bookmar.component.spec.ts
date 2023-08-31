import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarComponent } from './bookmar.component';

describe('BookmarComponent', () => {
  let component: BookmarComponent;
  let fixture: ComponentFixture<BookmarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookmarComponent]
    });
    fixture = TestBed.createComponent(BookmarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
