import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[stopPropagation]',
  standalone: true,
})
export class StopPropagationDirective {
  @HostListener('click', ['$event'])
  handle(event: Event) {
    event.stopPropagation();
  }
}
