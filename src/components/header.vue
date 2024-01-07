<template>
  <div>
    <nav class="circle-menu">
      <menu :class="{ active: menuVisible }">
        <a href="#" v-for="menu in menuOptions" :key="menu.key">
          <div class="list">
            <el-button
              circle
              size="large"
              class="navigation-btn"
              @click="navigateToRoute(menu)"
            >
              <font-awesome-icon :icon="`fa-solid fa-plus`" class="icon" />
            </el-button>
          </div>
        </a>
      </menu>
    </nav>
    <el-button
      circle
      size="large"
      class="controll-btn"
      @click="menuVisible = !menuVisible"
    >
      <font-awesome-icon :icon="`fa-solid fa-plus`" class="icon" />
    </el-button>
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
      class="bg-gray-light transation-form color-white"
    >
      <el-form
        ref="formRef"
        :model="form"
        label-width="80px"
        label-position="top"
      >
        <el-form-item
          label="Category"
          :rules="{
            required: true,
            message: 'Please Select Category',
            trigger: 'blur',
          }"
        >
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
        <el-form-item
          label="Amount"
          :rules="{
            required: true,
            message: 'Please input Amount',
            trigger: 'blur',
          }"
        >
          <el-input v-model="form.amount" />
        </el-form-item>

        <el-form-item label="Description">
          <el-input
            v-model="form.description"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="description"
          />
        </el-form-item>

        <div style="display: flex; justify-content: flex-end">
          <el-button @click="cancle">Cancel</el-button>
          <el-button type="info" @click="onSubmit(formRef)">Create</el-button>
        </div>
      </el-form>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { ElNotification } from "element-plus";
import { useTransationStore } from "@/stores/transationStore";
import { useRouter } from "vue-router";

const router = useRouter();

const storeTransation = useTransationStore();

const categoryOptions = ["food", "petrol", "cloths"];
const menuOptions = [
  { key: "dashboard", routeName: "/" },
  { key: "dashboard", routeName: "/analytics" },
  { key: "dashboard", routeName: "/filters" },
  { key: "dashboard", routeName: "/others" },
];

const formRef = ref(null);
const dialogFormVisible = ref(false);
const menuVisible = ref(false);

const form = ref({});
const onSubmit = async (formEl) => {
  if (!formEl) return;

  await formEl.validate((valid) => {
    if (valid && form.value.category && form.value.amount) {
      if (isNaN(form.value.amount)) {
        ElNotification({
          title: "Error",
          message: "Amount is not a Number",
          type: "error",
        });
        return;
      }
      storeTransation.submit(form);
      dialogFormVisible.value = false;
      form.value = {};
    } else {
      ElNotification({
        title: "Error",
        message: "Something Required Missing",
        type: "error",
      });
    }
  });
};
const cancle = () => {
  dialogFormVisible.value = false;
  form.value.category = undefined;
  form.value = {};
};

const navigateToRoute = (menu) => {
  menuVisible.value = false;

  router.push(`${menu.routeName}`);
};
</script>
