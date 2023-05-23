import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from './services/translate.service';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { CookieService } from 'ngx-cookie-service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'obstz_cookie';
  lang = "sk";

  private statusChangeSubscription!: Subscription;

  constructor(private translateService: TranslateService, private ccService: NgcCookieConsentService,
    private cookieService: CookieService, private gaService: GoogleAnalyticsService){ }

    ngOnInit(): void {
      if (!this.ccService.hasConsented())
        this.gaService.gtag('set', 'allow_google_signals', false );
      else 
        this.gaService.gtag('set', 'allow_google_signals', true );
  
      const lang = localStorage.getItem("lang");
      if ((lang === 'en') || (lang === 'sk')) {
        this.translateService.setLang(lang);
      } else
        this.translateService.setLang(this.lang);
  
      this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
        (event: NgcStatusChangeEvent) => {
          if (!this.ccService.hasConsented()){
            this.cookieService.deleteAll();
            this.gaService.gtag('set', 'allow_google_signals', false );
          }else {
            this.gaService.gtag('set', 'allow_google_signals', true );
          }
          this.cookieService.set("cookieconsent_status", event.status, 365);
        });
    }
  
    ngOnDestroy() {
      this.statusChangeSubscription.unsubscribe();
    }
  }
