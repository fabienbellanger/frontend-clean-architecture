import {Price} from "./Price";
import {SaleState} from "./SaleState";
import {SaleLine} from "./SaleLine";

export class Sale {
    id: string;
    date: Date;
    priceAti: Price;
    state: SaleState;
    lines: SaleLine[];

    constructor(id: string, date: Date, priceAti: number, state: SaleState, lines: SaleLine[]) {
        this.id = id;
        this.date = date;
        this.priceAti = new Price(priceAti, 'EUR');
        this.state = state;
        this.lines = lines;
    }
}