import {SaleState} from "../../entities/SaleState";
import {SaleLine} from "../../entities/SaleLine";
import {Price} from "../../entities/Price";

export class CreateSaleRequest {
    constructor(
        public id: string,
        public date: string,
        public priceAti: string,
        public state: string,
        public lines: string,
    ) {}

    priceFromString(): Price {
        return new Price(
            parseFloat(this.priceAti),
            'EUR'
        );
    }

    stateFromString(): SaleState {
        switch (this.state) {
            case 'paid':
                return SaleState.paid;
            case 'partially_paid':
                return SaleState.partially_paid;
            default:
                return SaleState.open;
        }
    }

    linesFromString(): SaleLine[] {
        return [];
    }

    dateFromString(): Date {
        return new Date();
    }
}