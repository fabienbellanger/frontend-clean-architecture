<template>
    <main>
        <h1>Counter store</h1>
        <div><b>{{store.count}}</b></div>
        <button v-on:click="store.increment()">Increment counter</button>
    </main>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();
</script>
