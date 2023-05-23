import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
