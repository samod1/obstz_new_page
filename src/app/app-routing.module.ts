import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ExecutiveBoardComponent } from './components/executive-board/executive-board.component';
import { VarSymbolComponent } from './components/var-symbol/var-symbol.component';
import { ExecutiveMinutesComponent } from './components/executive-minutes/executive-minutes.component';
import { ExecutiveComiteesComponent } from './components/executive-comitees/executive-comitees.component';
import { RegionalConferenceComponent } from './components/regional-conference/regional-conference.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'executive-board',
    component: ExecutiveBoardComponent,
    pathMatch: 'full'
  },
  {
    path: 'executive-minutes',
    component: ExecutiveMinutesComponent,
    pathMatch: 'full'
  },
  {
    path:'variabile-symbol',
    component: VarSymbolComponent,
    pathMatch: 'full'
  },
  {
    path:'executive-comitees',
    component: ExecutiveComiteesComponent,
    pathMatch: 'full'
  },
  {
    path:'conference-minutes',
    component: RegionalConferenceComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
