import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DeveloperComponent} from './developer.component';

const routes: Routes = [
  { path: '', component: DeveloperComponent },
  { path: ':id', component: DeveloperComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DeveloperRoutingModule { }
