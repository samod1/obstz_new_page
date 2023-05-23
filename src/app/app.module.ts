import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { FirstUppercasePipe } from './pipes/first-uppercase.pipe';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgcCookieConsentConfig } from 'ngx-cookieconsent/lib/service';
import { CookieService } from 'ngx-cookie-service';
import { TranslateService } from './services/translate.service';
import { forkJoin} from 'rxjs';
import { environment } from 'src/environments/environment';
import { TranslateNoCasePipe } from './pipes/translate-no-case.pipe';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "localhost"
  },
  "position": "bottom-left",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#000000",
      "text": "#ffffff",
      "link": "#ffffff"
    },
    "button": {
      "background": "#f1d600",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "opt-out",
  "content": {
    "message": "This website uses cookies to ensure you get the best experience on our website.",
    "dismiss": "Got it!",
    "deny": "Decline",
    "link": "Learn more",
    "href": "/privacy#top",
    "policy": "Cookie Policy",
    "header": "Cookies used on the website!",
    "allow": "Allow cookies"
  }
};
@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    FirstUppercasePipe,
    TranslateNoCasePipe,
    HomeComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga,[],"",true),
    NgxGoogleAnalyticsRouterModule,
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),

  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [TranslateService]
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initApp(translateService: TranslateService): () => Promise<any> {
  return () => forkJoin(
    translateService.load()
  ).toPromise();
}