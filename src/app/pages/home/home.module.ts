import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing.module";
import {UserLayoutModule} from "../../user-layout/user-layout.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {PaginationModule} from "../../components/pagination/pagination.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {NgxMaskModule} from "ngx-mask";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    UserLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    PaginationModule,
    MatGridListModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatButtonModule
  ]
})
export class HomeModule { }
