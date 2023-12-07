// Name: Nolan Berryhill
// File: book-detail-dialog.component.ts
// Date: 11/19/2023
// Description: TS file for Book Detail

// Angular specific imports
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBook } from '../book.interface';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-book-detail-dialog',
  templateUrl: './book-detail-dialog.component.html',
  styleUrls: ['./book-detail-dialog.component.scss']
})

// Export BookDetailDialogComponent
export class BookDetailDialogComponent {
  book!: IBook;

  constructor(
    private dialogRef: MatDialogRef<BookDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: {book: IBook }
  ) {
    this.book = data.book;
  }
}
