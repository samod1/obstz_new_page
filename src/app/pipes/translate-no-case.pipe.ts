import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translateNoCase',
  pure: false,
})
export class TranslateNoCasePipe implements PipeTransform {

  constructor(private _translate: TranslateService) { }

  transform(value: any, ...args: any[]): any {
    if (!value) {
      return;
    }
    return this._translate.translate(value, args != null && args.length > 0 ? args[0] : null);
  }

}
