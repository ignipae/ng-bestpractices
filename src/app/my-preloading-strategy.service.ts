import {Injectable} from '@angular/core';
import {PreloadingStrategy} from '@angular/router';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class MyPreloadingStrategyService implements PreloadingStrategy {
  preload(route : import ("@angular/router").Route, fn : () => import ("rxjs").Observable < any >) : import ("rxjs").Observable < any > {
    console.log(route);
    return fn();
  }

  constructor() {}
}
