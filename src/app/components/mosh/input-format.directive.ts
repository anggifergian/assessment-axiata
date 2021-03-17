import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('appInputFormat') format;

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    const words = value.split(' ');

    for (let i = 0; i < words.length; i++) {
      words[i] = this.toTitleCase(words[i]);
    }

    value = words.join(' ');
    console.log(value);

    this.el.nativeElement.value = value;
  }

  toTitleCase(word: string) {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  }
}
