import type {NavigationRoute} from "./NavigationRoute";

export interface Navigation {
    navigate(route: NavigationRoute): Promise<void>;
}
