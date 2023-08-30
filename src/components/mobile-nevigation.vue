<template>
  <div class="nevigation">
    <ul>
      <li
        :class="{ active: activeItem === item.text }"
        class="list"
        v-for="item in nevigationData"
        :key="item.text"
        @click="clickButton(item)"
      >
        <a href="#">
          <span class="icon">
            <font-awesome-icon :icon="`fa-solid fa-${item.icon}`"
          /></span>
          <span class="text">{{ item.text }}</span>
        </a>
      </li>

      <div class="indicator"></div>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const activeItem = ref("Add");

const nevigationData = [
  {
    icon: "user-secret",
    text: "Home",
  },
  {
    icon: "user-secret",
    text: "Menu",
  },
  {
    icon: "plus",
    text: "Add",
  },
  {
    icon: "clock",
    text: "History",
  },
  {
    icon: "user-secret",
    text: "Other",
  },
];

function clickButton(item) {
  (this.activeItem = item.text),
    router.push(
      item.text === "Add" ? "/" : item.text === "Add" ? "History" : "/history"
    );
}
</script>

