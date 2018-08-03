import { Pipe, PipeTransform } from "../../../node_modules/@angular/core";


@Pipe({
    name: 'ReplaceToSpaces'
})

export class ReplaceToSpaces implements PipeTransform{
    transform(value: string, character : string) {
       return value.replace(character," ");
    }

}