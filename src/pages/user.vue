<script setup>
import {
  ref,
  onMounted,
} from 'vue';

const count = ref(0);

const add = () => {
  console.log('add');
  count.value = count.value + 1;
}

onMounted(() => {
  setInterval(() => {
    console.log(11);
    count.value = count.value + 1;
  }, 1000);
})
</script>

<template>
<div>user</div>
<el-button @click="add">{{ count }}</el-button>
</template>

<style scoped>

</style>