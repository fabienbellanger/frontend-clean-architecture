import {defineStore} from "pinia";
import type {Sale} from "@frontend-clean-architecture/domain";

export const useSaleStore = defineStore('sale', {
    state: () => ({
        sale: null as Sale | null
    }),
    actions: {
        storeSale(sale: Sale) {
            this.sale = sale;
        },
    },
});