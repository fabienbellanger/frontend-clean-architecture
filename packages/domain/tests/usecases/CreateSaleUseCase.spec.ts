import {CreateSaleErrors, CreateSaleRequest, Price, Sale, SaleState} from "@frontend-clean-architecture/domain";
import {SaleRepositoryBuilder} from "../builders/SaleRepositoryBuilder";
import {CreateSaleUseCase} from "../../lib/usecases/CreateSaleUseCase";
import {CreateSalePresenterBuilder} from "../builders/CreateSalePresenterBuilder";

describe('create new sale use case', () => {
    test('display sale creation with invalid date', async () => {
        // Given
        const saleRepository = new SaleRepositoryBuilder().build();
        const useCase = new CreateSaleUseCase(saleRepository);

        // When
        const errors: CreateSaleErrors = await new Promise(resolve => {
            const presenter = new CreateSalePresenterBuilder()
                .withNotifyNewSaleError(err => resolve(err))
                .build();
            const request = new CreateSaleRequest('1', 'tot', '10.0', 'open', '[]');

            return useCase.execute(request, presenter);
        });

        // Then
        expect(errors[0]).toEqual('sale date is not valid');
    });

    test('display sale creation with invalid state', async () => {
        // Given
        const saleRepository = new SaleRepositoryBuilder().build();
        const useCase = new CreateSaleUseCase(saleRepository);

        // When
        const errors: CreateSaleErrors = await new Promise(resolve => {
            const presenter = new CreateSalePresenterBuilder()
                .withNotifyNewSaleError(err => resolve(err))
                .build();
            const request = new CreateSaleRequest('1', '2023-03-01', '10.0', 'opened', '[]');

            return useCase.execute(request, presenter);
        });

        // Then
        expect(errors[0]).toEqual('sale state is not valid');
    });

    test('display sale creation without error', async () => {
        // Given
        const saleRepository = new SaleRepositoryBuilder().build();
        const useCase = new CreateSaleUseCase(saleRepository);

        // When
        const sale: Sale = await new Promise(resolve => {
            const presenter = new CreateSalePresenterBuilder()
                .withNotifySaleCreated(sale => resolve(sale))
                .build();
            const request = new CreateSaleRequest('1', '2023-03-01', '10.0', 'open', '[]');

            return useCase.execute(request, presenter);
        });

        // Then
        expect(sale.id).toEqual('1');
        expect(sale.date).toEqual(new Date('2023-03-01'));
        expect(sale.state).toEqual(SaleState.open);
        expect(sale.priceAti).toEqual(new Price(10.0, 'EUR'));
        expect(sale.lines).toEqual([]);
    });
});