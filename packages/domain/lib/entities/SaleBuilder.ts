import type {Price} from "./Price";
import type {SaleState} from "./SaleState";
import type {SaleLine} from "./SaleLine";
import type {Sale} from "./Sale";

export class SaleBuilder {
    private id!: string;
    private date!: Date;
    private priceAti!: Price;
    private state!: SaleState;
    private lines!: SaleLine[];

    withId(id: string) {
        this.id = id;
        return this;
    }

    withDate(date: Date) {
        this.date = date;
        return this;
    }

    withPriceAti(price: Price) {
        this.priceAti = price;
        return this;
    }

    withState(state: SaleState) {
        this.state = state;
        return this;
    }

    withLines(lines: SaleLine[]) {
        this.lines = lines;
        return this;
    }

    build(): Sale {
        return {
            id: this.id,
            date: this.date,
            lines: this.lines,
            priceAti: this.priceAti,
            state: this.state
        }
    }
}