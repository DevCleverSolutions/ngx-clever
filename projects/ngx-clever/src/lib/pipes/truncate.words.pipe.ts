import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate-words'
})
export class TruncateWordsPipe implements PipeTransform {

    /**
     * Truncate words
     * @param value - input value
     * @param limit - limit count to words
     * @param trail - trail symbols for truncate by default (...)
     */
    transform(value: string, limit: number, trail: String = '...'): string {
        let result = value || '';

        if (value) {
            const words = value.split(/\s+/);

            if (words.length > Math.abs(limit)) {
                if (limit < 0) {
                    limit *= -1;
                    result = `${trail}${words.slice(words.length - limit, words.length).join(' ')}`;
                } else {
                    result = `${words.slice(0, limit).join(' ')}${trail}`;
                }
            }
        }

        return result;
    }

}
