import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {MyPreloadingStrategyService} from './my-preloading-strategy.service';

const routes : Routes = [

  {
    path: 'books',
    loadChildren: './books/books.module#BooksModule'
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  }, {
    path: '**',
    redirectTo: '/about'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: MyPreloadingStrategyService})],
  exports: [RouterModule]
})
export class AppRoutingModule {}