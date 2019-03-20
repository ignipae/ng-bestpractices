import {Component, OnInit} from '@angular/core';

import {BooksService} from '../shared/books.service';

@Component({selector: 'app-book-list', templateUrl: './book-list.component.html', styleUrls: ['./book-list.component.scss']})
export class BookListComponent implements OnInit {
  books : Object;

  constructor(private bookService : BooksService) {}

  ngOnInit() {
    this
      .bookService
      .getBooks()
      .subscribe(books => this.books = books);
  }

  selectBook(book) {
    console.log(book);
  }

}
