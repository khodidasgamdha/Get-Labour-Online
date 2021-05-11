import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLabourComponent } from './book-labour.component';

describe('BookLabourComponent', () => {
  let component: BookLabourComponent;
  let fixture: ComponentFixture<BookLabourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookLabourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookLabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
