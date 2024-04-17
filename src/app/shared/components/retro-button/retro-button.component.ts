import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-retro-button',
  templateUrl: './retro-button.component.html',
  styleUrls: ['./retro-button.component.scss'],
})
export class RetroButtonComponent {
  @Input() public buttonLabel: string = '';
  @Output() public buttonClick = new EventEmitter<void>();

  public onButtonClick(): void {
    this.buttonClick.emit();
  }
}
