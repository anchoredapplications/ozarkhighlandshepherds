import type { Puppy } from "./puppy";

export interface Litter {
    name: string;
    photo: string;
    birthDate: Date;
    description: string;
    puppies: Puppy[];
}
