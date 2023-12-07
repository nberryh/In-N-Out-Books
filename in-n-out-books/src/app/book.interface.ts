// Name: Nolan Berryhill
// File: book.interface.ts
// Date: 11/19/2023
// Description: TS file for book interface

// export IBook interface
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
