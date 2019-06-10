import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LayoutModule} from './layouts/layout.module';
import {HomeComponent} from './layouts/home/home.component';
import {PageNotFoundComponent} from './layouts/pagenotfound/pagenotfound.component';

@NgModule({
  declarations:
    [
      AppComponent,
      HomeComponent,
      PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
