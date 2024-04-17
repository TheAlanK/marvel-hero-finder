import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MenuComponent }
    ]),
    SharedModule
  ],
  exports: [
    MenuComponent,
    RouterModule
  ]
})
export class MenuModule { }
