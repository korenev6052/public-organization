import { Component, Input } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Component({
  selector: 'po-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent {

  constructor() { }

  @Input() form: FormGroup;
  @Input() placeholder: string;
  @Input() name: string;
  @Input() label: string;
  @Input() errors: object;
  @Input() progress: number;
  @Input() icon: string;

  errorMessage: string;

  isControlHasError(): boolean {
    const control = this.form.get(this.name);
    if (control && control.enabled && !control.valid) {
      this.setErrorMessage(control);
      return true;
    } else {
      return false;
    }
  }

  private setErrorMessage(control: AbstractControl) {
    for (const key in control.errors) {
      this.errorMessage = this.errors[key];
    }
  }

}