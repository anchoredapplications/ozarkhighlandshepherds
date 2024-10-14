import type { Route } from "~/types/route";

export const routes: Record<string, Route> = {
    home: { path: '/', label: 'Home' },
    about: { path: '/faq', label: 'FAQ' },
    litters: { path: '/litters', label: 'Litters' },
    puppies: { path: '/puppies', label: 'New Puppies' },
    contact: { path: '/contact', label: 'Contact' },
}