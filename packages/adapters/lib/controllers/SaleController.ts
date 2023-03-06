import {Controller} from "./Controller";
import type {SalePresenter, SalePresenterVM} from "../presenters";
import {GetSaleUseCase, GetSaleRequest} from "@frontend-clean-architecture/domain";

export class SaleController extends Controller<SalePresenterVM> {
    constructor(private saleId: string,
                private getSaleUseCase: GetSaleUseCase,
                protected presenter: SalePresenter) {
        super(presenter);
    }

    fetchSale() {
        this.getSaleUseCase.execute(
            new GetSaleRequest(this.saleId),
            this.presenter,
        )
    }
}