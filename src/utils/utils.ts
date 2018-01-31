export function isUndefined(value: any): boolean {
    return typeof value === 'undefined';
}

export function isNil(value: any): boolean {
    return value === null || typeof (value) === 'undefined';
}

export function isNull(value: any): boolean {
    return value === null;
}

export function isNullOrEmpty(value: any): boolean {
    return value === null || value === '';
}

export function IsNullOrWhiteSpace(value: any): boolean {
    return value === null || value.trim() === '';
}

export function isNumber(value: any): boolean {
    return typeof value === 'number';
}

export function isString(value: any): boolean {
    return typeof value === 'string';
}

export function isObject(value: any): boolean {
    return typeof value === 'object';
}

export function isFunction(value: any): boolean {
    return typeof value === 'function';
}
