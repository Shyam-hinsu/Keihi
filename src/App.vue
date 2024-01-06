<template>
  <!-- <div class="app">
    <Header style="height: 10%" />
    <AppContain style="height: 80%" />
    <MobileNevigation style="height: 10%" />
  </div> -->

  <div class="common-layout">
    <el-container class="content-container">
      <el-header class="header" style="height: 5%">
        <Header />
      </el-header>
      <el-main style="height: 80%; overflow: scroll" class="main-body">
        <AppContain />
      </el-main>

      <el-footer style="height: auto" class="footer"> </el-footer>
    </el-container>
  </div>
</template>

<script setup>
// import MobileNevigation from "../src/components/mobile-nevigation.vue";
import Header from "../src/components/header.vue";
import AppContain from "../src/components/app-contain.vue";
import { onMounted } from "vue";
import { useTransationStore } from "@/stores/transationStore";

const storeTransation = useTransationStore();
//store

//hook
onMounted(() => {
  storeTransation.init();
});
</script>

<style>
@import "./assets/design/style.css";
</style>
