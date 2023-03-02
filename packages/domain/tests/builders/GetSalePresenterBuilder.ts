import {GetSalePresenter, Sale} from "@frontend-clean-architecture/domain";

export class GetSalePresenterBuilder {
    build(): GetSalePresenter {
        return {
            displaySale: this.displaySale,
            displayError: this.displayError,
            displayLoading: this.displayLoading,
        }
    }

    withDisplaySale(displaySale: (sale: Sale) => void)  {
        this.displaySale = displaySale;
        return this;
    }

    withDisplayError(displayError: (err: Error) => void)  {
        this.displayError = displayError;
        return this;
    }

    private displaySale: (sale: Sale) => void = () => null;

    private displayLoading: () => void = () => null;

    private displayError: (err: Error) => void = () => null;
}