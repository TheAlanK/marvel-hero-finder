import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { MenuComponent } from './menu.component';
import { RetroButtonComponent } from '@shared/components/retro-button/retro-button.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuComponent, RetroButtonComponent ],
      providers: [
        { provide: Router, useValue: { navigate: jasmine.createSpy('navigate') } }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /marvel-search when start button is clicked', () => {
    const button = fixture.debugElement.query(By.css('app-retro-button'));
    button.triggerEventHandler('buttonClick', null);
    expect(router.navigate).toHaveBeenCalledWith(['/marvel-search']);
  });
});
