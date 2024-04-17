import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvelSearchComponent } from './marvel-search.component';
import { MarvelDetailsComponent } from './marvel-details/marvel-details.component';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MarvelSearchComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'marvel-search', component: MarvelSearchComponent }
    ]),
    MarvelDetailsComponent,
    SharedModule
  ],
  exports: [
    MarvelSearchComponent,
    RouterModule
  ]
})
export class MarvelSearchModule { }
