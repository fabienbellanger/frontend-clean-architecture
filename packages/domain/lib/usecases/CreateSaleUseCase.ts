import {SaleRepository} from "../ports/repositories/SaleRepository";
import {CreateSaleRequest} from "../ports/requests/CreateSaleRequest";
import {CreateSalePresenter} from "../ports/presenters/CreateSalePresenter";
import {SaleBuilder} from "../entities/SaleBuilder";

export class CreateSaleUseCase {
    constructor(public readonly saleRepository: SaleRepository) {}

    async execute(request: CreateSaleRequest, presenter: CreateSalePresenter) {
        const error = this.validate(request);
        if (error !== null) {
            presenter.notifyNewSaleError(error)
        } else {
            const sale = new SaleBuilder()
                .withId(request.id)
                .withDate(request.dateFromString())
                .withPriceAti(request.priceFromString())
                .withState(request.stateFromString())
                .withLines(request.linesFromString())
                .build();
            await this.saleRepository.CreateSale(sale);
            presenter.notifySaleCreated(sale);
        }
    }

    validate(request: CreateSaleRequest): Error | null {
        if (request.id.length === 0) {
            return new Error('empty ID');
        } else if (isNaN(parseFloat(request.priceAti))) {
            return new Error('invalid API price');
        }
        return null;
    }
}