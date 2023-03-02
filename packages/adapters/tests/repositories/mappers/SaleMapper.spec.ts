import {SaleDto, SaleMapper} from "@frontend-clean-architecture/adapters";
import {Price, Sale, SaleState} from "@frontend-clean-architecture/domain";

describe('SaleMapper', () => {
    test('map sale from API to domain', () => {
        // Given
        const saleFromApi: SaleDto = {
            id: '1',
            date: '2023-02-01',
            priceAti: '10.0',
            state: 'open',
            lines: [],
        };

        // When
        const sale = SaleMapper.toSaleDomain(saleFromApi);

        // Then
        const expectedSale: Sale = {
            id: '1',
            date: new Date('2023-02-01'),
            priceAti: new Price(10.0, 'EUR'),
            state: SaleState.open,
            lines: [],
        };
        expect(sale).toEqual(expectedSale);
    });

    test.each([
        ['open', SaleState.open],
        ['paid', SaleState.open], // TODO: change
        ['partially_paid', SaleState.open], // TODO: change
    ])('map sale state %s to domain %s', (saleStateStr: string, saleState: SaleState) => {
        // Given
        const saleFromApi: SaleDto = {
            id: '1',
            date: '2023-02-01',
            priceAti: '10.0',
            state: saleStateStr,
            lines: [],
        };

        // When
        const sale = SaleMapper.toSaleDomain(saleFromApi);

        // Then
        expect(sale.state).toEqual(saleState);
    });
});
