import type {GetSalePresenter, Sale} from "@frontend-clean-architecture/domain";
import {Presenter} from "./Presenter";

export class SalePresenterVM {
    sale: Sale | undefined;
    loading: boolean = false;
    error: Error | undefined;
}

export class SalePresenter extends Presenter<SalePresenterVM> implements GetSalePresenter {
    constructor() {
        super(new SalePresenterVM());
    }

    displaySale(sale: Sale): void {
        this.vm.sale = sale;
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
        this.vm.sale = undefined;
        this.notifyVM();
    }
}
