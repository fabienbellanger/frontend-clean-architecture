import {GetSalePresenter, Sale} from "@frontend-clean-architecture/domain";

export class GetSalePresenterBuilder {
    build(): GetSalePresenter {
        return {
            displaySale: this.displaySale,
            displayError: this.displayError,
            displayLoading: this.displayLoading,
        }
    }

    private displaySale: (sale: Sale) => void = () => null;

    private displayLoading: () => void = () => null;

    private displayError: (err: Error) => void = () => null;
}