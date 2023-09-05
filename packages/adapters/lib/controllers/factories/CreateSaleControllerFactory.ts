import {CreateSaleUseCase} from "@frontend-clean-architecture/domain/lib/usecases/CreateSaleUseCase";
import {CreateSaleController, CreateSalePresenterAdapter, Navigation} from "@frontend-clean-architecture/adapters";

export class CreateSaleControllerFactory {
    constructor(
        private createSaleUseCase: CreateSaleUseCase,
        private navigation: Navigation,
    ) {}

    build(): CreateSaleController {
        return new CreateSaleController(
            this.createSaleUseCase,
            new CreateSalePresenterAdapter(this.navigation)
        );
    }
}