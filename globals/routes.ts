import type { Route } from "~/types/route";

// Route names object
export const routes: Record<string, Route> = {
    home: { path: '/', label: 'Home' },
    about: { path: '/about', label: 'About Us' },
    litters: { path: '/puppies', label: 'Puppies' },
    contact: { path: '/contact', label: 'Contact' },
}