import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
    transform(value: any): any {
        return value.replace(/be|vung/gi, function(x) {
            console.log('day la gi tri x', x);
            return x.uppercase();
        });
    }
    // transform(value: any, ...args: any[]): any {
    //     console.log('this is value', value);
    //     console.log('this is args', args);
    // }
}