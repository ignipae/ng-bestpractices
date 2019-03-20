import {Component, OnInit, NgZone, ChangeDetectionStrategy} from '@angular/core';

@Component({selector: 'app-my-nav', templateUrl: './my-nav.component.html', styleUrls: ['./my-nav.component.scss']})
export class MyNavComponent implements OnInit {

  constructor(private _ngZone : NgZone) {}

  public get title() {
    console.log("request title");
    return "Angular-Essentials-Training";
  }
  ngOnInit() {}

}
