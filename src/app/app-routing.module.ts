import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JavaComponent } from './pages/java/java.component';
import { OtherComponent } from './pages/other/other.component';
import { WebComponent } from './pages/web/web.component';

const routes: Routes = [
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
    redirectTo: 'web'
  },
  {
    path: 'web',
    component: WebComponent
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
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
