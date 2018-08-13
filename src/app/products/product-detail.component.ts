import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  prodTitle : string;
  productItem : IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router ) { }

  ngOnInit() {
    let prodId = +this.route.snapshot.paramMap.get('id');
    console.log("inside init of details",prodId);
    this.prodTitle += ` : ${prodId}`;
    this.productItem = {
      "productId": prodId,
      "productName": "Leaf Rake",
      "productCode": "GDN-0011",
      "releaseDate": "March 19, 2016",
      "description": "Leaf rake with 48-inch wooden handle.",
      "price": 19.95,
      "starRating": 3.2,
      "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
  }

  onBackPressed():void{
    this.router.navigate(['/productList'])
  }

}
