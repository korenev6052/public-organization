import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, of, Subscription } from 'rxjs';

import { FormFields } from '../../interfaces/form-fields.interface';
import { FormErrors } from '../../interfaces/form-errors.interface';

@Component({
  selector: 'po-single-form',
  template: ''
})
export class SingleFormComponent implements OnDestroy {

  constructor(protected formBuilder: FormBuilder, protected snackBar: MatSnackBar) { }

  form: FormGroup;
  formErrors: object = {};
  makeRequest: Observable<any> = of(null);
  sending: boolean = false;
  sent: boolean = false;
  sub1: Subscription;

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
      this.sub1 = this.makeRequest.subscribe((response: any) => {
        this.sending = false;
        this.sent = true;
        this.form.reset();
        this.showMessage(successMessage);
        this.onSubmitSuccess(response);
      }, (error: any) => {
        this.sending = false;
        this.showMessage(failMessage);
        this.onSubmitFail(error);
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  protected showMessage(message: string) {
    if (message) {
      this.snackBar.open(message, 'Закрыть', { duration: 5000, verticalPosition: 'top' });
    }
  }

  protected onSubmitSuccess(response: any) {
    // console.log(response);
  }

  protected onSubmitFail(error: any) {
    // console.log(error);
  }

  ngOnDestroy() {
    if (this.sub1) {
      this.sub1.unsubscribe();
    }
  }

}