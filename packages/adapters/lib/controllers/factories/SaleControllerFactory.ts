import {GetSaleUseCase} from "@frontend-clean-architecture/domain";
import {SaleController, SalePresenter} from "@frontend-clean-architecture/adapters";

export class SaleControllerFactory {
    constructor(
        private getSaleUseCase: GetSaleUseCase,
    ) {}

    build(saleId: string): SaleController {
        return new SaleController(saleId, this.getSaleUseCase, new SalePresenter());
    }
}