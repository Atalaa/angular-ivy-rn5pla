import {
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appModel]',
})
export class ModelDirective implements OnInit {
  @Input() appModel;
  @Output() appModelChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.el.nativeElement.value = this.appModel;
    this.el.nativeElement.addEventListener('keyup', (event) => {
      this.appModelChange.emit(event.target.value);
    });
  }
}
