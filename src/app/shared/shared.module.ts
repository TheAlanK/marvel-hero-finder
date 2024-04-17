import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RetroButtonComponent } from './components/retro-button/retro-button.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ConnectionSnackbarComponent } from './components/connection-snackbar/connection-snackbar.component';

@NgModule({
  declarations: [
    RetroButtonComponent,
    SearchBarComponent,
    ConnectionSnackbarComponent,

  ],
  imports: [
    CommonModule,
    MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule,
    MatAutocompleteModule, MatProgressSpinnerModule, FormsModule, ReactiveFormsModule, MatSnackBarModule
  ],
  exports: [
    RetroButtonComponent,
    SearchBarComponent,
    ConnectionSnackbarComponent,
  ]
})
export class SharedModule { }
