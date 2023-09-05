import {CreateSaleUseCase} from "@frontend-clean-architecture/domain/lib/usecases/CreateSaleUseCase";
import {CreateSaleRequest} from "@frontend-clean-architecture/domain";
import {CreateSalePresenterAdapter, CreateSalePresenterVM} from "../presenters/CreateSalePresenter";
import {Controller} from "./Controller";

export class CreateSaleController extends Controller<CreateSalePresenterVM> {
    constructor(
        private createSaleUseCase: CreateSaleUseCase,
        protected presenter: CreateSalePresenterAdapter
    ) {
        super(presenter);
    }

    create() {
        this.createSaleUseCase.execute(
            new CreateSaleRequest(
                this.presenter.vm.saleId || '',
                this.presenter.vm.saleDate || '',
                this.presenter.vm.salePriceAti || '',
                this.presenter.vm.saleState || '',
                this.presenter.vm.saleLines || '',
            ),
            this.presenter,
        );
    }
}