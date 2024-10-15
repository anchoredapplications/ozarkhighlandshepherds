import type { Route } from "~/types/route";
import breed from '~/assets/breed.json'

export const getRoutes: () => Record<string, Route> = () => {
    return {
        home: { path: '/', label: 'Home' },
        about: { path: '/faq', label: 'FAQ' },
        litters: { path: '/litters', label: 'Litters', disabled: breed.litters.length <= 1 },
        puppies: { path: '/puppies', label: 'New Puppies', disabled: breed.litters.length == 0 },
        contact: { path: '/contact', label: 'Contact' },
    };
}