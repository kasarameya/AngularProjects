import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListOfProductsComponent } from './products/product-list.component';
import { ReplaceToSpaces } from './shared/replace-tospaces.pipe';
import { StarRating } from './shared/star.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component'
import {RouterModule} from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    ListOfProductsComponent,
    ReplaceToSpaces,
    StarRating,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'productList', component :ListOfProductsComponent},
      {path: 'productDetail/:id', component: ProductDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo: 'welcome',pathMatch:'full'}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
