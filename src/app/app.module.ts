import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formComponent } from './forms/form.component';
import { HomeComponent } from './home/home.component';
import { homeService } from './home/home.service';
import { formSubmitComponent } from './submit/formSubmit.component';
import { homeCanDeactivateService } from './home/home-can-deactivate-guard.service';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HomeComponent,
    formComponent,
    formSubmitComponent,
  ],
  providers: [homeService, homeCanDeactivateService],

  bootstrap: [AppComponent],
})
export class AppModule {}
