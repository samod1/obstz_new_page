/**Imports from angular */

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransferHttpCacheModule} from '@nguniversal/common';

/**Translatation imports  */

import { TranslatePipe } from './pipes/translate.pipe';
import { FirstUppercasePipe } from './pipes/first-uppercase.pipe';
import { TranslateNoCasePipe } from './pipes/translate-no-case.pipe';
import { TranslateService } from './services/translate.service';
import { forkJoin} from 'rxjs';


/**Imports for GA */

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgcCookieConsentConfig } from 'ngx-cookieconsent/lib/service';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';


/*Components*/

import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExecutiveBoardComponent } from './components/executive-board/executive-board.component';
import { VarSymbolComponent } from './components/var-symbol/var-symbol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { ExecutiveMinutesComponent } from './components/executive-minutes/executive-minutes.component';
import { ExecutiveComiteesComponent } from './components/executive-comitees/executive-comitees.component';
import { RegionalConferenceComponent } from './components/regional-conference/regional-conference.component';




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
    NavbarComponent,
    ExecutiveBoardComponent,
    VarSymbolComponent,
    ValidationMessageComponent,
    ExecutiveMinutesComponent,
    ExecutiveComiteesComponent,
    RegionalConferenceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGoogleAnalyticsModule.forRoot(environment.ga,[],"",true),
    NgxGoogleAnalyticsRouterModule,
    BrowserAnimationsModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    TransferHttpCacheModule,
    
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [TranslateService]
    },
    CookieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function initApp(translateService: TranslateService): () => Promise<any> {
  return () => forkJoin(
    translateService.load()
  ).toPromise();
}
