import {CreateSaleRequest, Sale} from "@frontend-clean-architecture/domain";
import {SaleRepositoryBuilder} from "../builders/SaleRepositoryBuilder";
import {CreateSaleUseCase} from "../../lib/usecases/CreateSaleUseCase";
import {CreateSalePresenterBuilder} from "../builders/CreateSalePresenterBuilder";

describe('create new sale use case', () => {
    test('display sale creation', () => {
        return new Promise<Sale>(resolve => {
            // Given
            const saleRepository = new SaleRepositoryBuilder()
                .withCreateSale((sale: Sale) => {
                    resolve(sale);
                    return Promise.resolve();
                })
                .build();
            const useCase = new CreateSaleUseCase(saleRepository);
            const presenter = new CreateSalePresenterBuilder()
                .withNotifyNewSaleError(err => {})
                .build();
            const request = new CreateSaleRequest('1', '2023-03-', '10.0', 'open', '[]');

            // When
            useCase.execute(request, presenter);
        }).then(sale => {
            // Then
            expect(sale).toBeNull();
        });

        // Try:
        // Given
        // const cityRepository = new CityRepositoryBuilder().build()
        // const useCase = new AddCityUseCase(cityRepository)
        //
        // // When
        // const errors: AddCityErrors = await new Promise(resolve => {
        //     const presentation = new AddCityPresentationBuilder()
        //         .withNotifyNewCityInvalid((err: AddCityErrors) => {
        //             resolve(err)
        //         })
        //         .build()
        //     return useCase.execute(new AddCityRequest('', '-2', '13'), presentation)
        // })
        //
        // // Then
        // expect(errors.has(NewCityFields.cityName)).toBeTruthy()
        // expect(errors.get(NewCityFields.cityName)).toBe('City name is required')
    });
});