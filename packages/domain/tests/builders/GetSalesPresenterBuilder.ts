import {GetSalesPresenter, Sale} from "@frontend-clean-architecture/domain";

export class GetSalesPresenterBuilder {
    build(): GetSalesPresenter {
        return {
            displaySales: this.displaySales,
        }
    }

    withDisplaySales(displaySales: (sales: Sale[]) => void) {
        this.displaySales = displaySales;
        return this;
    }

    private displaySales: (sales: Sale[]) => void = () => null;
}