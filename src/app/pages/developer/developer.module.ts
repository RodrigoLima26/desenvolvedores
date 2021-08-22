import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DeveloperComponent} from "./developer.component";
import {DeveloperRoutingModule} from "./developer-routing.module";
import {UserLayoutModule} from "../../user-layout/user-layout.module";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {PaginationModule} from "../../components/pagination/pagination.module";
import {MatGridListModule} from "@angular/material/grid-list";
import {NgxMaskModule} from "ngx-mask";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
    declarations: [DeveloperComponent],
  imports: [
    CommonModule,
    FormsModule,
    DeveloperRoutingModule,
    UserLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    PaginationModule,
    MatGridListModule,
    NgxMaskModule.forRoot(),
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
    providers: [
      MatDatepickerModule,
      { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }
    ]
})
export class DeveloperModule { }
