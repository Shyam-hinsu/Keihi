<template>
  <!-- <div class="app">
    <Header style="height: 10%" />
    <AppContain style="height: 80%" />
    <MobileNevigation style="height: 10%" />
  </div> -->

  <div class="common-layout">
    <el-container class="content-container">
      <el-header style="height: 10%"> Header</el-header>
      <el-main style="height: 80%">Main</el-main>
      <el-footer style="height: 10%" class="footer">
        <el-button
          circle
          size="large"
          class="add-button"
          @click="dialogFormVisible = true"
        >
          <font-awesome-icon :icon="`fa-solid fa-plus`" class="icon" />
        </el-button>

        <el-dialog
          v-model="dialogFormVisible"
          align-center
          title="Add Transation"
          width="70%"
          class="bg-black transation-form"
        >
          <el-form :model="form" label-width="120px">
            <el-form-item label="Category">
              <el-select
                v-model="form.region"
                placeholder="please select your zone"
              >
                <el-option label="Zone one" value="shanghai" />
                <el-option label="Zone two" value="beijing" />
              </el-select>
            </el-form-item>
            <el-form-item label="Amount">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import MobileNevigation from "../src/components/mobile-nevigation.vue";
import Header from "../src/components/header.vue";
import AppContain from "../src/components/app-contain.vue";
import { reactive, ref } from "vue";

import { onMounted } from "vue";
import { useTransationStore } from "@/stores/transationStore";

//store
const storeTransation = useTransationStore();

//hook
onMounted(() => {
  storeTransation.init();
});

const dialogFormVisible = ref(false);

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

const onSubmit = () => {
  console.log("submit!");
};
</script>

<style>
@import "./assets/design/style.css";
</style>
