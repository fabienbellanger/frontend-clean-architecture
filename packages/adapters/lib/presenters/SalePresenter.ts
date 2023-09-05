import type {GetSalePresenter, Sale} from "@frontend-clean-architecture/domain";
import {Presenter} from "./Presenter";

export class SalePresenterVM {
    saleStore: Sale | undefined;
    saleId: string | undefined;
    loading: boolean = false;
    error: Error | undefined;
}

export class SalePresenter extends Presenter<SalePresenterVM> implements GetSalePresenter {
    constructor() {
        super(new SalePresenterVM());
    }

    displaySale(sale: Sale): void {
        this.vm.saleStore = sale;
        this.vm.saleId = sale.id;
        this.vm.loading = false;
        this.vm.error = undefined;
        this.notifyVM();
    }

    displayLoading() {
        this.vm.loading = true;
        this.notifyVM();
    }

    displayError(err: Error) {
        this.vm.loading = false;
        this.vm.error = err;
        this.vm.saleStore = undefined;
        this.vm.saleId = undefined;
        this.notifyVM();
    }
}
