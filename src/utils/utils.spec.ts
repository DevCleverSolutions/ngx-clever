import { } from 'jasmine';

import { isNull, isUndefined, isNil, isNullOrEmpty, IsNullOrWhiteSpace } from './utils';

describe('TruncatePipe', () => {

  it('should return true', () => {
    expect(isNull(null)).toBeTruthy();

    expect(isUndefined(undefined)).toBeTruthy();

    expect(isNil(null || undefined)).toBeTruthy();

    expect(isNullOrEmpty(null)).toBeTruthy();
    expect(isNullOrEmpty('')).toBeTruthy();

    expect(IsNullOrWhiteSpace(null)).toBeTruthy();
    expect(IsNullOrWhiteSpace('      ')).toBeTruthy();
  });

  it('should return false', () => {
    expect(isNull('')).toBeFalsy();
  });

});
