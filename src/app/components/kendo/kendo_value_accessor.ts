
import {Directive, ElementRef, Renderer, Self, forwardRef, Provider} from '@angular/core';
import {NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/common';
import {isBlank, CONST_EXPR} from '@angular/src/facade/lang';


const KENDO_VALUE_ACCESSOR = CONST_EXPR(new Provider(
    NG_VALUE_ACCESSOR, {useExisting: forwardRef(() => KendoValueAccessor), multi: true}));

@Directive({
  selector: kendo.webComponents.join(","),
  host: {'(change)': 'internalOnChange()',
         '(spin)': 'internalOnChange()'},
  bindings: [KENDO_VALUE_ACCESSOR]
})
export class KendoValueAccessor implements ControlValueAccessor {
  onChange = (_) => {};
  onTouched = () => {};

  element: any;

  constructor(private _renderer: Renderer, private _elementRef: ElementRef) {
    this.element = _elementRef.nativeElement;
  }

  internalOnChange = () => {
    this.onChange(this.element.value());
  };

  writeValue(value: any): void {
    this.element.value(value);
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
