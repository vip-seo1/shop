import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store/store.component';



@NgModule({
  declarations: [StoreComponent],
  imports: [
    CommonModule,
    ModelModule
  ]
})
export class StoreModule { }
