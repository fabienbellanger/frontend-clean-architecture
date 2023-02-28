import {GetSalePresenter, Sale} from "@frontend-clean-architecture/domain";
import {Presenter} from "./Presenter";

export class SalePresenterVM {
    sale: Sale | undefined;
    loading: boolean = false;
}

export class SalePresenter extends Presenter<SalePresenterVM> implements GetSalePresenter {
    constructor() {
        super(new SalePresenterVM());
    }

    displaySale(sale: Sale): void {
        this.vm.sale = sale;
        this.vm.loading = false;
        this.notifyVM();
    }

    displayLoading() {
        this.vm.loading = true;
        this.notifyVM();
    }
}
