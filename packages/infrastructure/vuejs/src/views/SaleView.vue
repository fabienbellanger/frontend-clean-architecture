<template>
    <div class="about">
        <h1>Sale ID: {{id}}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import {SALE_CONTROLLER_FACTORY} from "@/DependencyInjection";
import type {SaleController} from "@frontend-clean-architecture/adapters/lib";

export default defineComponent({
    name: 'Sale',
    components: {},
    setup() {
        const saleId = useRoute().params.id.toString();
        const controller = inject(SALE_CONTROLLER_FACTORY)?.build(saleId) as SaleController;
        const vm = ref(controller.vm);

        onMounted(() => {
            controller.subscribeVM(updatedVm => {
                vm.value = { ...updatedVm };
            })
            controller.fetchSale();
        })

        return {
            vm,
            id: ref(saleId),
        }
    },
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
