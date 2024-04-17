import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { ConnectionSnackbarComponent } from '@shared/components/connection-snackbar/connection-snackbar.component';
import { checkConnectionStart } from 'src/store/connection/connection.actions';
import { ConnectionState } from 'src/store/connection/connection.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private isCurrentlyOnline = true;

  constructor(
    private store: Store<{ connection: ConnectionState }>,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.store.dispatch(checkConnectionStart());
    this.store.select(state => state.connection.isConnected).subscribe(isConnected => {
      if (this.isCurrentlyOnline !== isConnected) {
        this.handleConnectionChange(isConnected);
        this.isCurrentlyOnline = isConnected;
      }
    });
  }

  private handleConnectionChange(isConnected: boolean) {
    if (!isConnected) {
      this.showSnackBar('Offline', 'red', '/assets/images/sad-deadpool.webp', true);
    } else {
      this.showSnackBar('Online', 'green', '/assets/images/happy-deadpool.webp', false);
    }
  }


  private showSnackBar(message: string, color: string, imgPath: string, persist: boolean = false) {
    this.snackBar.dismiss();
    this.snackBar.openFromComponent(ConnectionSnackbarComponent, {
      data: { message: message, img: imgPath },
      duration: persist ? undefined : 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: [`${color}-snackbar`]
    });
  }
}
