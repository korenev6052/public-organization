import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators'

import { FormFields } from '../../interfaces/form-fields.interface';
import { FormErrors } from '../../interfaces/form-errors.interface';

@Component({
  selector: 'po-single-form',
  template: ''
})
export class SingleFormComponent implements OnDestroy {

  constructor(protected formBuilder: FormBuilder, protected snackBar: MatSnackBar) { }

  form: FormGroup;
  formErrors: FormErrors = {};
  makeRequest: Observable<any> = of(null);
  sending: boolean = false;
  sent: boolean = false;
  destroy: Subject<boolean> = new Subject<boolean>();

  protected initForm(formFields: FormFields, formErrors?: FormErrors) {
    this.form = this.formBuilder.group(formFields);
    if (formErrors) {
      this.formErrors = formErrors;
    }
  }

  protected formSubmit(successMessage?: string, failMessage?: string) {
    if (this.form.valid) {
      this.sending = true;
      this.sent = false;
      this.makeRequest
        .pipe(takeUntil(this.destroy))
        .subscribe((response: any) => {
          this.sending = false;
          this.sent = true;
          this.form.reset();
          if (successMessage) {
            this.showMessage(successMessage);
          }
          this.onSubmitSuccess(response);
        }, (error: any) => {
          this.sending = false;
          if (failMessage) {
            this.showMessage(failMessage);
          }
          this.onSubmitFail(error);
        });
    } else {
      this.form.markAllAsTouched();
    }
  }

  protected showMessage(message: string) {
    this.snackBar.open(message, 'Закрыть', { duration: 5000, verticalPosition: 'top' });
  }

  protected onSubmitSuccess(response: any) {

  }

  protected onSubmitFail(error: any) {

  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }

}