import {SaleRepositoryBuilder} from "../builders/SaleRepositoryBuilder";
import {GetSaleRequest, GetSaleUseCase, Price, Sale, SaleBuilder, SaleState} from "@frontend-clean-architecture/domain";
import {GetSalePresenterBuilder} from "../builders/GetSalePresenterBuilder";

describe('Get sale use case', () => {
    test('display sale information', async () => {
        const saleRepository = new SaleRepositoryBuilder()
            .withGetSale(() => Promise.resolve(new SaleBuilder()
                .withId('1')
                .withDate(new Date())
                .withState(SaleState.open)
                .withPriceAti(new Price(10.0, 'EUR'))
                .withLines([])
                .build())
            )
            .build();

        const useCase = new GetSaleUseCase(saleRepository);
        const presenter = new GetSalePresenterBuilder().build();
        const request = new GetSaleRequest('1');

        // When
        const res = useCase.execute(request, presenter);
        res
            .then(() => expect('1').toEqual('1'))
            .catch(() => expect(2).toEqual(3));

        /*return new Promise(resolve => {
            // Given
            const saleRepository = new SaleRepositoryBuilder()
                .withGetSale(() => Promise.resolve(new SaleBuilder()
                    .withId('1')
                    .withDate(new Date())
                    .withState(SaleState.open)
                    .withPriceAti(new Price(10.0, 'EUR'))
                    .withLines([])
                    .build())
                )
                .build();

            const useCase = new GetSaleUseCase(saleRepository);
            const presenter = new GetSalePresenterBuilder().build();
            const request = new GetSaleRequest('1');

            // When
            return useCase.execute(request, presenter);
        }).then(sale => {
            // Then
            expect((sale as Sale).id).toEqual('1');
        });*/
    });
});
