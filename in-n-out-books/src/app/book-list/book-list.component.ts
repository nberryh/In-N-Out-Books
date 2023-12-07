// Name: Nolan Berryhill
// File: book-list.component.ts
// Date: 12/10/2023
// Description: TS file for book list

// Angular specific imports
import { Component } from '@angular/core';
import { IBook } from '../book.interface';
import { BooksService } from '../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailDialogComponent } from '../book-detail-dialog/book-detail-dialog.component';
import { HttpClient } from '@angular/common/http';

// Selector, template, styleUrls for component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

// Export for BookListComponent
export class BookListComponent {

  // Variable comfirm for books and book
  books: IBook[] = [];

  book: IBook | null | undefined;

  // Constructor for booksService and Books
  constructor(private booksService: BooksService, private dialog: MatDialog, private http: HttpClient) {

    this.booksService.getBooks().subscribe((res: any) => {
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author: { name:string; }) {
              return author.name;
            })
          }

          this.books.push({
            isbn: res[key].details.isbn_13,
            title: res[key].details.title,
            description: res[key].details.description ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    });
  }

  // Show book details
  showBookDetails(event: Event, isbn: string) {
    event.preventDefault();
    const book = this.books.find((b) => b.isbn === isbn);

    this.dialog.open(BookDetailDialogComponent, {
      data: { book: this.book }
    })

  }
}
