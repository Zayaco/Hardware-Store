import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    ProductComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
