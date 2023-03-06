import type {Sale} from "../../entities";

export interface GetSalePresenter {
    displaySale(sale: Sale): void;
    displayLoading(): void;
    displayError(err: Error): void;
}
