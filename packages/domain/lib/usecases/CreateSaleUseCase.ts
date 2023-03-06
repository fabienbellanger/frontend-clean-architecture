import {
    CreateSaleErrors,
    CreateSalePresenter,
    CreateSaleRequest, Price,
    SaleBuilder,
    SaleRepository,
    SaleState
} from "@frontend-clean-architecture/domain";

export class CreateSaleUseCase {
    constructor(private saleRepository: SaleRepository) {}

    async execute(request: CreateSaleRequest, presenter: CreateSalePresenter) {
        const errors = this.validate(request, presenter);

        if (errors.length === 0) {
            try {
                const sale = new SaleBuilder()
                    .withId(request.id)
                    .withDate(new Date(request.date))
                    .withState(SaleState.open) // TODO: request.state => SaleState
                    .withLines([]) // TODO: request.lines => SaleLine[]
                    .withPriceAti(new Price(parseFloat(request.priceAti), 'EUR'))
                    .build();
                await this.saleRepository.createSale(sale);
                presenter.notifySaleCreated(sale);
            } catch (err: any) {
                errors.push(err.toString());
                presenter.notifyNewSaleError(errors);
            }
        }
    }

    validate(request: CreateSaleRequest, presenter: CreateSalePresenter) {
        const errors = [] as CreateSaleErrors;

        // TODO: Add errors

        presenter.notifyNewSaleError(errors);
        return errors;
    }
}