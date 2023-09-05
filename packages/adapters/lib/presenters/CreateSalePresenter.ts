import {Navigation, NavigationRoute, Presenter} from "@frontend-clean-architecture/adapters";
import {CreateSaleErrors, CreateSalePresenter, Sale} from "@frontend-clean-architecture/domain";

export class CreateSalePresenterVM {
    saleErrors: string[] | undefined;
    saleId: string | undefined;
    saleDate: string | undefined;
    salePriceAti: string | undefined;
    saleState: string | undefined;
    saleLines: string | undefined;
}

export class CreateSalePresenterAdapter extends Presenter<CreateSalePresenterVM> implements CreateSalePresenter {
    constructor(private navigation: Navigation) {
        super(new CreateSalePresenterVM());
    }

    notifySaleCreated(sale: Sale): void {
        this.navigation.navigate(NavigationRoute.SALE(sale))
    }
    notifyNewSaleError(errors: CreateSaleErrors): void {
        this.vm.saleErrors = errors.map(err => err);
        this.notifyVM();
    }
}