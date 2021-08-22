import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path:'', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  {path:'desenvolvedor', loadChildren: () => import('./pages/developer/developer.module').then(m => m.DeveloperModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

