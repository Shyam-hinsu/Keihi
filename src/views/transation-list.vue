<template>
  <div v-for="t in storeTransation.transations" :key="t.id">
    <TransationCard :item="t" />
  </div>
</template>

<script setup>
import TransationCard from "../components/transation-card.vue";

import { useTransationStore } from "@/stores/transationStore";
const storeTransation = useTransationStore();
</script>

<style lang="scss" scoped></style>
