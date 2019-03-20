import {Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy} from '@angular/core';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Component({selector: 'app-test', templateUrl: './test.component.html', styleUrls: ['./test.component.scss'], changeDetection: ChangeDetectionStrategy.OnPush})
export class TestComponent implements OnInit {
  title$ = of("test").pipe(delay(1000));

  constructor(public cdRef : ChangeDetectorRef) {}

  ngOnInit() {}

}
