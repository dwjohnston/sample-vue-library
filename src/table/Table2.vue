<template>
  <slot name="xxx" foo="hello"></slot>
  <table>
    <thead>
      <tr>
        <td v-for="{ key } in columns">
          <slot :name="`column-${key}`"></slot>
        </td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row[idKey] as PropertyKey">
        <td v-for="{ key, renderType } in columns">
          <slot v-if="renderType" :name="key" :data="row"></slot>
          <template v-else>
            <DefaultTableCellDisplay :value="row[key]" />
          </template>
        </td>
      </tr>
    </tbody>
  </table>
  <div>
    <button :disabled="page === 1" @click="prevPage">Previous</button>
    <span>Page {{ page }}</span>
    <button :disabled="rows.length < pageSize" @click="nextPage">Next</button>
  </div>
</template>

<script setup generic="T extends Record<string, unknown>" lang="ts">
import { ref, onMounted, type Ref } from "vue";
import type { Table2Props } from "./Table.types";
import DefaultTableCellDisplay from "./DefaultTableCellDisplay.vue";

const props = defineProps<Table2Props<T>>();

const rows = ref<T[]>([]) as Ref<T[]>;

const page = ref(1);
const pageSize = ref(10);

function handleSortClick(column: keyof T) {}

async function fetchRows() {
  const result = await props.getPageFn({
    page: page.value,
    pageSize: pageSize.value,
  });
  rows.value = result.data;
}

function nextPage() {
  page.value++;
  fetchRows();
}

function prevPage() {
  if (page.value > 1) {
    page.value--;
    fetchRows();
  }
}

onMounted(fetchRows);
</script>
