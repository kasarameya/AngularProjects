import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ListOfProductsComponent } from './products/product-list.component';
import { ReplaceToSpaces } from './shared/replace-tospaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListOfProductsComponent,
    ReplaceToSpaces
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
