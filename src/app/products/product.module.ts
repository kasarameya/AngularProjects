import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfProductsComponent } from './product-list.component';
import { ReplaceToSpaces } from '../shared/replace-tospaces.pipe';
import { StarRating } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { RouterModule } from '../../../node_modules/@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'productList', component :ListOfProductsComponent},
      {path: 'productDetail/:id',
      canActivate:[ProductDetailGuard],
      component: ProductDetailComponent}
    ]),
    SharedModule
  ],
  declarations: [ListOfProductsComponent,
    ReplaceToSpaces,
    ProductDetailComponent,]
})
export class ProductModule { }
