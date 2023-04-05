import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { formComponent } from './forms/form.component';
import { formSubmitComponent } from './submit/formSubmit.component';
import { homeCanDeactivateService } from './home/home-can-deactivate-guard.service';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canDeactivate: [homeCanDeactivateService],
  },
  {
    path: 'submit',
    component: formSubmitComponent,
  },
  {
    path: 'submit/:display',
    component: formSubmitComponent,
  },
  {
    path: 'form',
    component: formComponent,
  },

  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
