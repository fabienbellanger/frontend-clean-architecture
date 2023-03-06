import type {Price} from "./Price";

export interface Product {
    id: string;
    name: string;
    price: Price;
}