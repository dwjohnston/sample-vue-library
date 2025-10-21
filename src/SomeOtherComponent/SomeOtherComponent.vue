<script lang="ts" setup>
defineProps<{ bar: number }>();
</script>
<template>
  <div>Some Other Component! bar: {{ bar }}</div>
</template>
<style scoped>
div {
  border: dotted 1px red;
  padding: 1em;
}
</style>
