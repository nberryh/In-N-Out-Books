// Name: Nolan Berryhill
// File: book.service.ts
// Date: 12/10/2023
// Description: TS file for book service

// Imports interfaces
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

// providedIn for injectable
@Injectable({
  providedIn: 'root'
})

// export BooksService
export class BooksService {

  // isbn string
  isbn: string[] = ['0345339681', '0261103571', '9780593099322', '9780261102361', '9780261102378', '9780590302715', '9780316769532', '9780743273565', '9780590405959'];

  // Constructor
  constructor(private http: HttpClient) {

  }

  // getBooks from open library
  getBooks() {
    let params = new HttpParams();
    params = params.append('bibkeys', `ISBN:${this.isbn.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');

    return this.http.get('https://openlibrary.org/api/books', { params });
  }
}
