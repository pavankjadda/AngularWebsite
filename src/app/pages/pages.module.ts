import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JavaComponent } from './java/java.component';
import { OtherComponent } from './other/other.component';
import { WebComponent } from './web/web.component';

@NgModule({
  declarations: [JavaComponent, OtherComponent, WebComponent],
  imports: [CommonModule]
})
export class PagesModule {}
