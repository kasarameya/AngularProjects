import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListOfProductsComponent } from './products/product-list.component';
import { ReplaceToSpaces } from './shared/replace-tospaces.pipe';
import { StarRating } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail/product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    ListOfProductsComponent,
    ReplaceToSpaces,
    StarRating,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
