import { } from 'jasmine';

import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {

    let pipe: TruncatePipe;

    beforeEach(() => {
        pipe = new TruncatePipe();
    });

    it('transforms "Hello World" to "Hello Wor..."', () => {
        expect(pipe.transform('Hello World', 9, '...')).toEqual('Hello Wor...');
    });

    it('transforms "Hello World" to "...llo World"', () => {
        expect(pipe.transform('Hello World', -9, '...')).toEqual('...llo World');
    });

    it('transforms "Hello World" to "..."', () => {
        expect(pipe.transform('Hello World', 0, '...')).toEqual('...');
    });

});
