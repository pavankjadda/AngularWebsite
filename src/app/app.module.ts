import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LayoutModule} from './layouts/layout.module';
import {HomeComponent} from './pages/home/home.component';
import {PageNotFoundComponent} from './layouts/pagenotfound/pagenotfound.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {PagesModule} from './pages/pages.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    PagesModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule
{

}
