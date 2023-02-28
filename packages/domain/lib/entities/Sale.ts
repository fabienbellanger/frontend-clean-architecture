import {Price} from "./Price";
import {SaleState} from "./SaleState";
import {SaleLine} from "./SaleLine";

export interface Sale {
    id: string;
    date: Date;
    priceAti: Price;
    state: SaleState;
    lines: SaleLine[];
}