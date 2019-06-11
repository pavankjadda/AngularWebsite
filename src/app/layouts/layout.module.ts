import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGlobe, faLaptopCode, faMobile} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  declarations:
    [
    HeaderComponent,
    FooterComponent,
    MainComponent
    ],
  exports: [MainComponent]
})
export class LayoutModule
{
  constructor()
  {
    // Add an icon to the library for convenient access in other components
    library.add(faGlobe);
    library.add(faMobile);
    library.add(faLaptopCode);
  }
}
