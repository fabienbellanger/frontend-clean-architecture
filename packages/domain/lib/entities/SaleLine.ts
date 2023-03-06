import type {Price} from "./Price";

export interface SaleLine {
    id: string;
    productId: string;
    priceAti: Price;
}