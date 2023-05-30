import { Component, HostListener } from '@angular/core';
import { TranslateService } from 'src/app/services/translate.service';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE})),
      state('true', style({ height: '0'})),
      transition('false => true', animate('0.3s ease-in')),
      transition('true => false', animate('0.3s ease-out'))
    ])
  ]
})
export class NavbarComponent {
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    this.closeNavbar()
  }
  /** otvorenie/zatvorenie navigacnej listy */
  navbarOpen: boolean = false;
  /**otvorenie/zatvorenie jazykoveho komponentu */
  openLangDropdown: boolean = false;
  openExeDropdown: boolean = false;
  constructor(private translateService: TranslateService){}

  clickOnMenuItem(e: any) {
    if ((e.target.innerHTML === 'en')||(e.target.innerHTML === 'sk'))
      this.translateService.setLang(e.target.innerHTML);
  }

  /** otvorenie/zatvorenie navigacneho panela */
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
    this.openLangDropdown = false;
    this.openExeDropdown = false;
  }
  /** zatvorenie komponentu */
  closeNavbar(event? : any){
    if (event?.target?.id !=="navbarLangDropdown"){
      this.navbarOpen = false;
      this.openLangDropdown = false;
    }else
    {this.openLangDropdown = !this.openLangDropdown;}
      

    if(event?.target.id !== "navbarExeDropdown"){
      this.navbarOpen =false;
      this.openExeDropdown=false;
    }else
    this.openExeDropdown=!this.openExeDropdown;
  }
}
