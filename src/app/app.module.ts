import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from './layouts/layout.module';
import {HomeComponent} from './layouts/home/home.component';
import {PageNotFoundComponent} from './layouts/pagenotfound/pagenotfound.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations:
    [
      AppComponent,
      HomeComponent,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    LayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
