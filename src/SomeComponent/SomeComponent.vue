<script lang="ts" setup>
defineProps<{ foo: string }>();
</script>
<template>
  <div>Hello {{ foo }}</div>
</template>
<style scoped>
div {
  border: dotted 1px red;
  padding: 1em;
}
</style>
