import {Price} from "./Price";

export interface SaleLine {
    id: string;
    productId: string;
    priceAti: Price;
}