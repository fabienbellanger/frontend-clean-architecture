export class CreateSaleRequest {
    constructor(
        public id: string,
        public date: string,
        public priceAti: string,
        public state: string,
        public lines: string,
    ) {}
}