<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{ value: unknown }>();

const valueType = computed(() => {
  return typeof props.value;
});
</script>

<template>
  <div
    v-if="value === null || value === undefined"
    class="default-cell-empty"
  ></div>
  <div
    v-else-if="
      valueType === 'string' ||
      valueType === 'number' ||
      valueType === 'boolean'
    "
    :class="`default-cell-${valueType}`"
  >
    {{ value }}
  </div>

  <div v-else>
    {{ value.toString() }}
  </div>
</template>

<style scoped>
.default-cell-number {
  text-align: right;
}
</style>
