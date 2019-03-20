import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class BooksService {

  restRoot = 'http://localhost:4730/books';

  constructor(private http : HttpClient) {}

  getBooks() {
    const url = this.restRoot;
    return this
      .http
      .get(url);
  }
}
