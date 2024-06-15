import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-main-button',
  standalone: true,
  templateUrl: './main-button.component.html',
  styleUrl: './main-button.component.css',
  imports: [NgClass],
})
export class MainButtonComponent {
  @Input({
    required: false,
  })
  title = '';
  @Input({
    required: false,
  })
  isDisabled = false;
  @Input({
    required: false,
  })
  buttonType = 'button';
  @Output() clickEvent = new EventEmitter<void>();

  public handleClick() {
    if (!this.isDisabled) {
      this.clickEvent.emit();
    }
  }
}
