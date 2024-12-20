import { AbstractControl } from '@angular/forms';

export type MetaForm<T extends object> = {
  [K in keyof T]: AbstractControl<T[K]>;
};
