import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailDialogComponent } from './book-detail-dialog.component';

describe('BookDetailDialogComponent', () => {
  let component: BookDetailDialogComponent;
  let fixture: ComponentFixture<BookDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookDetailDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
