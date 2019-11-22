import { ValidatorFn } from '@angular/forms';

export interface FormFields {
  [key: string]: [string, (ValidatorFn | ValidatorFn[])?]
}