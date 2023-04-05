import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { HomeComponent } from './home.component';

@Injectable()
export class homeCanDeactivateService implements CanDeactivate<HomeComponent> {
  canDeactivate(component: HomeComponent): boolean {
    if (component.gender.dirty) {
      return confirm('Are you sure you want to submit');
    }
    return true;
  }
}
