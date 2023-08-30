<template>
  <div class="app">
    <Header style="height: 10%" />

    <AppContain style="height: 80%" />
    <MobileNevigation style="height: 10%" />
  </div>
</template>

<script setup>
import MobileNevigation from "../src/components/mobile-nevigation.vue";
import Header from "../src/components/header.vue";
import AppContain from "../src/components/app-contain.vue";
</script>

<style >
@import "./assets/design/style.css";
</style>
