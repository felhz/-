<script setup></script>

<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <div @click="click">button</div>
</template>
<script setup lang="js">
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  console.log(111);
});
const router = useRouter();

const click  = () => {
    router.replace({
      query: {
        _: Date.now(),
      },
    });
}
</script>
<style scoped></style>
