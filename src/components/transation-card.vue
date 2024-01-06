<template>
  <div class="bg-gray-dark transation-card">
    <div class="icon bg-gray-light">
      <font-awesome-icon :icon="`fa-solid fa-plus`" class="icon" />
    </div>

    <div class="discription">
      <span class="category">
        {{ item.category }}
      </span>
      <span class="discription-text">
        {{ item.discription }}
      </span>
    </div>

    <div class="amount">
      <span class="amount-text flex-end">
        {{ item.amount }}
      </span>
      <span class="onlyDat test-small flex-end">
        {{ item.onlyDat }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: {},
  },
});
</script>

<style scoped>
.transation-card {
  min-height: 80px;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.transation-card .icon {
  width: 15%;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.transation-card .discription {
  width: 50%;
  height: inherit;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  padding: 10px;
}

.transation-card .amount {
  width: 30%;
  height: inherit;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.test-small {
  font-size: 10px;
}
.flex-end {
  display: flex;
  justify-content: flex-end;
  text-align: right;
}
</style>
