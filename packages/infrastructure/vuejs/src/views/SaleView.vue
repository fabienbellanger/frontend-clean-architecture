<template>
    <div class="about">
        <h1>Sale ID from query parameter: {{saleId}}</h1>
        <br>
        <h2 v-if="vm.loading">Chargement en cours...</h2>
        <h2 v-else-if="vm.error" style="color: red">Error: {{vm.error}}</h2>
        <h2 v-else>Sale Id: {{vm.saleStore?.id}}</h2>
        <button style="padding: 4px 8px; margin-top: 8px" @click="retry()">Retry</button>
    </div>
</template>

<script lang="ts" setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {SALE_CONTROLLER_FACTORY} from "@/DependencyInjection";
import type {SaleController} from "@frontend-clean-architecture/adapters";
import { useSaleStore } from '@/stores/sale';

const saleStore = useSaleStore();
const saleId = useRoute().params.id.toString();
const controller = inject(SALE_CONTROLLER_FACTORY)?.build(saleId) as SaleController;
const vm = ref(controller.vm);

onMounted(() => {
    controller.subscribeVM(updatedVm => {
        vm.value = { ...updatedVm };
        console.log('controller updated', vm.value);

        if (vm.value.saleStore !== undefined) {
            saleStore.save(vm.value.saleStore);
        }
    });
    controller.fetchSale();
})

function retry() {
    controller.fetchSale();
}
</script>
