import {Price, Sale, SaleState} from '@frontend-clean-architecture/domain';
import type {SaleDto} from "../dto/SaleDto";

export class SaleMapper {
    static toSaleDomain(sale: SaleDto): Sale {
        return {
            id: sale.id,
            date: new Date(sale.date),
            priceAti: new Price(parseFloat(sale.priceAti), 'EUR'),
            lines: [],
            state: this.getState(sale.state),
        }
    }

    static getState(_state: string): SaleState {
        return SaleState.open;
    }
}
