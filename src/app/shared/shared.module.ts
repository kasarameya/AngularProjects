import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { StarRating } from './star.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [StarRating],
  exports: [
    CommonModule,
    FormsModule,
    StarRating]
})
export class SharedModule { }
