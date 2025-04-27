import type { Sex } from "./sex";

export interface Puppy {
    name: string;
    nickname: string;
    sex: Sex;
    price: number;
    images: string[];
}

export function isPuppy(value: any): value is Puppy {
    if  (typeof value !== 'object') return false;
    if  (!Object.hasOwn(value, 'name')) return false;
    if  (!Object.hasOwn(value, 'price')) return false;
    if  (!Object.hasOwn(value, 'images')) return false;
    return true
}