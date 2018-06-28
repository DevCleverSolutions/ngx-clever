import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

    /**
     * Truncate characters
     * @param value - input value
     * @param limit - limit count to symbols
     * @param trail - trail symbols for truncate by default (...)
     */
    transform(value: string, limit: number, trail: String = '...'): string {
        if (!value) {
            return '';
        }

        if (limit < 0) {
            limit *= -1;
            return value.length > limit ? `${trail}${value.substring(value.length - limit, value.length)}` : value;
        }

        return value.length > limit ? `${value.substring(0, limit)}${trail}` : value;
    }

}
