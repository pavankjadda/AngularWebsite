import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular/angular.component';
import { JavaComponent } from './java/java.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [AngularComponent, JavaComponent, OtherComponent],
  imports: [CommonModule],
})
export class PagesModule {}
