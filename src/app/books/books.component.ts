import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-books', templateUrl: './books.component.html', styleUrls: ['./books.component.scss']})
export class BooksComponent implements OnInit {

  constructor() {}

  ngOnInit() {

    // example for reactive array functions -> sum all even numbers between 0 and
    // 100
    let arr = new Array(100);

    let out = arr
      .fill(0)
      .map((v, i) => i + 1)
      .filter(i => i % 2 == 0)
      .reduce((prev, curr) => prev + curr, 0);
    console.log(out);
  }

}
