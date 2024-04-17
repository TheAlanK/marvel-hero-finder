import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetroButtonComponent } from './retro-button.component';
import { By } from '@angular/platform-browser';

describe('RetroButtonComponent', () => {
  let component: RetroButtonComponent;
  let fixture: ComponentFixture<RetroButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetroButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit buttonClick event when the button is clicked', () => {
    spyOn(component.buttonClick, 'emit');
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

  it('should display the button label', () => {
    const testLabel = 'Test Button';
    component.buttonLabel = testLabel;
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button.textContent).toContain(testLabel);
  });
});
