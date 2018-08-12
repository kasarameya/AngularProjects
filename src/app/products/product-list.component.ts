import { Component, OnInit } from "../../../node_modules/@angular/core";
import { IProduct } from "./product";
import { ProductsService } from "./product.service";


@Component({
    selector : 'pl-products',
    templateUrl : './product-list.component.html'
})

export class ListOfProductsComponent implements OnInit{
    ngOnInit(): void {
        console.log("Inside init");
        this.allProducts = this.productService.getProducts();
        this.searchedProducts = this.allProducts;
    } 
    pageTitle : string = 'My Product List';
    imgWidth : number = 40;
    imgMargin: number = 2;
    imageDisplayed:boolean = false;
    _textFilter : string = 'kk';
    searchedProducts : IProduct[];
    allProducts: IProduct[];

    get textFilter():string{
        return this._textFilter;
    }

    set textFilter(text : string){
        this._textFilter = text;
        this.searchedProducts = this.textFilter ? this.performSearch(this.textFilter):this.allProducts;
    }

    performSearch(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.allProducts.filter((product: IProduct) =>
          product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
      }
    
      constructor(private productService: ProductsService){
      }
    toggleImageStatus():void {
        this.imageDisplayed = !this.imageDisplayed;
    }

    reflectStarClick(text: string):void{
        this.pageTitle = text;
    }
}