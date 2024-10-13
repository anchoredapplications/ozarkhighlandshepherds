import type { Litter } from "./litter";

export interface Breed {
    name: string;
    description: string;
    litters: Litter[];
    photo: string;
}
