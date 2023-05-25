import { Component, Input } from "@angular/core";
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-validation-message',
  templateUrl: 'validation-message.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ValidationMessageComponent,
    multi: true
  }]
})
export class ValidationMessageComponent implements ControlValueAccessor {
  @Input() form: FormControl | undefined;

  @Input() formControlName: string = "";

  get control(): AbstractControl {
    return this.form || (this.controlContainer as any).form.controls[this.formControlName]
  }

  getError() {
    return this.control.errors;
  }

  constructor(private controlContainer: ControlContainer) { }
  writeValue(obj: any): void { }
  registerOnChange(fn: any): void { }
  registerOnTouched(fn: any): void { }
  setDisabledState?(isDisabled: boolean): void { }
}