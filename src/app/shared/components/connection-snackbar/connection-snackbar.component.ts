import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-connection-snackbar',
  templateUrl: './connection-snackbar.component.html',
  styleUrls: ['./connection-snackbar.component.scss']
})
export class ConnectionSnackbarComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string, img: string, altText?: string },
    private snackBarRef: MatSnackBarRef<ConnectionSnackbarComponent>
  ) {}

  close() {
    this.snackBarRef.dismiss();
  }
}
