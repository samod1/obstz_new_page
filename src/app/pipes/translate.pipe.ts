import { Pipe, PipeTransform } from '@angular/core';
import { FirstUppercasePipe } from './first-uppercase.pipe';
import { TranslateService } from '../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe extends FirstUppercasePipe implements PipeTransform {

  constructor(private _translate: TranslateService) {
    super();
  }

  override transform(value: any, ...args: any[]): any {
    if (!value) {
      return;
    }
    return super.transform(this._translate.translate(value, args != null && args.length > 0 ? args[0] : null));
  }

}

