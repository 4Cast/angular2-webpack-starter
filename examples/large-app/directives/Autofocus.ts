/// <reference path="../../../src/typings/_custom.d.ts" />
import {Directive, ElementRef} from '@angular/angular2';
import {Renderer} from '@angular/angular2';

// Simple example directive that fixes autofocus problem with multiple views
@Directive({
  selector: '[autofocus]' // using [ ] means selecting attributes
})
export class Autofocus {
  constructor(el: ElementRef, renderer: Renderer) {
    // autofocus fix for multiple views
    renderer.invokeElementMethod(el, 'focus', []);
  }
}
