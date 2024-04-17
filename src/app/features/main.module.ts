import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MarvelDetailsComponent } from './marvel-search/marvel-details/marvel-details.component';
import { MarvelSearchModule } from './marvel-search/marvel-search.module';
import { MenuModule } from './menu/menu.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MarvelSearchModule,
    MarvelDetailsComponent,
    MenuModule
  ],
  exports: [MarvelDetailsComponent]
})
export class MainModule { }
