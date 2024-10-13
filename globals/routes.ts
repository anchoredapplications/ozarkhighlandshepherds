import type { Route } from "~/types/route";

// Route names object
export const routes: Record<string, Route> = {
    home: { path: '/', label: 'Home' },
    about: { path: '/about', label: 'About Us' },
    litters: { path: '/litters', label: 'Litters' },
    puppies: { path: '/puppies', label: 'New Puppies' },
    contact: { path: '/contact', label: 'Contact' },
}