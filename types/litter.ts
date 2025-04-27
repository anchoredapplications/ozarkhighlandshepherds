import type { Puppy } from "./puppy";

export interface Litter {
    name: string;
    images: string[];
    birthDate: Date;
    description: string[];
    puppies: Puppy[];
}
