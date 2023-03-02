import {SaleRepositoryBuilder} from "../builders/SaleRepositoryBuilder";
import {GetSalesUseCase, Sale, SaleState} from "@frontend-clean-architecture/domain";
import {GetSalesPresenterBuilder} from "../builders/GetSalesPresenterBuilder";

describe('Get sales use case', () => {
    test('display sales list', () => {
        return new Promise<Sale[]>(resolve => {
            // Given
            const saleRepository = new SaleRepositoryBuilder()
                .withGetSales(() => Promise.resolve([
                    new Sale('1', new Date(), 10.0, SaleState.open, []),
                    new Sale('2', new Date(), 15.0, SaleState.open, []),
                ]))
                .build();
            const useCase = new GetSalesUseCase(saleRepository);
            const presenter = new GetSalesPresenterBuilder().withDisplaySales(sales => resolve(sales)).build();

            // When
            useCase.execute(presenter);
        }).then(sales => {
            // Then
            expect(sales).toHaveLength(2);
        });
    }, 1_000);
});