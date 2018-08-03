import { Component, OnChanges, Input, EventEmitter, Output } from "../../../node_modules/@angular/core";


@Component({
    selector : 'sl-ratings',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarRating implements OnChanges{
    @Input() rating : number = 5;
    width: number ;
    @Output() starClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.width = this.rating * 75 / 5;
    }

    onClickeds():void{
       this.starClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}