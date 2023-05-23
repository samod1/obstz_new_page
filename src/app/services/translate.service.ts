import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Dictionary } from '../models/dictionary.interface';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private static baseLang = 'en';
  private dict: any = {};
  public lang = new BehaviorSubject<string>(TranslateService.baseLang);;

  constructor(protected http: HttpClient) {
    if(localStorage.getItem('lang'))
      this.lang.next(""+localStorage.getItem('lang'));
    else
      this.lang.next(window.navigator.languages ? window.navigator.languages[0] : navigator.language);

    if (this.lang.getValue().indexOf('-') > 0) {
      this.lang.next(this.lang.getValue().substring(0, this.lang.getValue().indexOf('-')));
    }
    this.dict[this.lang.getValue()] = {};
    this.dict[TranslateService.baseLang] = {};
  }

  public translate(key: string, params: any = null): string {
    let val = this.dict[this.lang.getValue()][key];
    if (!val) {
      val = this.dict[TranslateService.baseLang][key];
    }

    return val ? this.interpolate(val, params) : key;
  }

  private interpolate(expr: string, params?: any): string {
    if (typeof expr !== 'string' || !params) {
      return expr;
    }

    return expr.replace(/{([^{}\s]*)}/g, (str, key) => params[key] == null ? key : params[key]);
  }

  public load(): Observable<any> {
    const subj = new Subject<any>();
    this.http.get<Dictionary[]>('dict/dictionary.json').subscribe(data => {
      this.onLoad(data);
      subj.next(this.dict);
      subj.complete();
    });
    return subj.asObservable();
  }

  private onLoad(dictionary: Dictionary[]) {
    dictionary.forEach(item => {
        const lang = item.lang;
      if (!this.dict[item.lang]) {
        this.dict[lang] = {};
      }
      this.dict[lang][item.key] = item.value;
    });
    return this.dict;
  }

  public getLang() {
    return this.lang.getValue();
  }

  public setLang(lang: string) {
    this.lang.next(lang);
    localStorage.setItem('lang',lang);
  }
}

