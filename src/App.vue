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
          <el-form :model="form" label-width="60px">
            <el-form-item label="Category">
              <el-select
                v-model="form.category"
                placeholder="please select category"
              >
                <el-option
                  v-for="category in categoryOptions"
                  :key="category"
                  :label="category"
                  :value="category"
                />
              </el-select>
            </el-form-item>
            <el-form-item label="Amount">
              <el-input v-model="form.amount" />
            </el-form-item>

            <el-form-item label="Discription">
              <el-input
                v-model="form.discription"
                :autosize="{ minRows: 2, maxRows: 4 }"
                type="textarea"
                placeholder="Discription"
              />
            </el-form-item>

            <div style="display: flex; justify-content: flex-end">
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="cancle">Cancel</el-button>
            </div>
          </el-form>
        </el-dialog>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
// import MobileNevigation from "../src/components/mobile-nevigation.vue";
// import Header from "../src/components/header.vue";
// import AppContain from "../src/components/app-contain.vue";
import { reactive, ref } from "vue";

import { onMounted } from "vue";
import { useTransationStore } from "@/stores/transationStore";

const categoryOptions = ["food", "petrol", "cloths"];

//store
const storeTransation = useTransationStore();

//hook
onMounted(() => {
  storeTransation.init();
});

const dialogFormVisible = ref(false);

const form = ref({});

const onSubmit = () => {
  storeTransation.submit(form);
  dialogFormVisible.value = false;
  form.value = {};
};

const cancle = () => {
  dialogFormVisible.value = false;
  form.value = ref({});
};
</script>

<style>
@import "./assets/design/style.css";
</style>
