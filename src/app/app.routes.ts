import { Routes } from '@angular/router';
import { PutinComponent } from './putin/putin.component';
import { TakeoutComponent } from './takeout/takeout.component';

export const routes: Routes = [
  { path: 'putin', component: PutinComponent },
  { path: 'takeout', component: TakeoutComponent },
];
