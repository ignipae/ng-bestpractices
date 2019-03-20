import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AboutModule} from './about/about.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MyNavComponent} from './my-nav/my-nav.component';
import {HttpClientModule} from '@angular/common/http';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent, MyNavComponent, TestComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AboutModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}