import type {Sale} from "@frontend-clean-architecture/domain";


export type NavigationRouteURL = string;
export class NavigationRoute {
    static HOME: NavigationRouteURL = '/';

    // Sales
    static SALES: NavigationRouteURL = '/sales';
    static SALE(sale: Sale): NavigationRouteURL { return `/sales/${sale.id}` };
}
