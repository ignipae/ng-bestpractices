import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutModule } from './about/about.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNavComponent } from './my-nav/my-nav.component';


@NgModule({
  declarations: [
    AppComponent, MyNavComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}