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

  constructor(private el: ElementRef) {
    console.log(el.nativeElement);
  }

  ngOnInit() {
    this.el.nativeElement.value = this.appModel;
    this.el.nativeElement.addEventListener('keyup', (event) => {
      console.log(event.target.value);
      this.appModelChange.emit(event.target.value);
    });
  }
}
