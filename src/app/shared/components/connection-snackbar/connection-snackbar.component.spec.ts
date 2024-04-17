import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { ConnectionSnackbarComponent } from './connection-snackbar.component';
import { MatIconModule } from '@angular/material/icon';
class MockMatSnackBarRef {
  dismiss() {}
}

describe('ConnectionSnackbarComponent', () => {
  let component: ConnectionSnackbarComponent;
  let fixture: ComponentFixture<ConnectionSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ ConnectionSnackbarComponent ],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Test message', img: 'http://localhost:9876/Test%20image' } },
        { provide: MatSnackBarRef, useClass: MockMatSnackBarRef }

      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectionSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct message and image', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('Test message');
    expect(compiled.querySelector('img').src).toBe('http://localhost:9876/Test%20image');
  });

  it('should call dismiss when close button is clicked', () => {
    spyOn(component['snackBarRef'], 'dismiss');
    const button = fixture.debugElement.nativeElement.querySelector('.close-button');
    button.click();
    expect(component['snackBarRef'].dismiss).toHaveBeenCalled();
  });

});
