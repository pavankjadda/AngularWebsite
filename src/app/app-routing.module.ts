import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './layouts/home/home.component';
import {AngularComponent} from './pages/angular/angular.component';
import {JavaComponent} from './pages/java/java.component';
import {OtherComponent} from './pages/other/other.component';
import {PageNotFoundComponent} from './layouts/pagenotfound/pagenotfound.component';

const routes: Routes=[
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'angular',
    component: AngularComponent
  },
  {
    path: 'java',
    component: JavaComponent
  },
  {
    path: 'other',
    component: OtherComponent
  },
  {
    path: '*',
    component: PageNotFoundComponent
  }
];

@NgModule( {
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
} )

export class AppRoutingModule
{
}
