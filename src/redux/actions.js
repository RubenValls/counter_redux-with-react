export const REDUCE = 'REDUCE';
export const ADD = 'ADD';

export function add(number) {
    return {
        type: ADD,
        number: number
    }
}

export function reduce(number) {
    return {
        type: REDUCE,
        number: number
    }
}

