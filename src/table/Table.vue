<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns" :key="col.propertyKey">
          {{ col.label }}
          <button v-if="col" @click="handleSortClick(col.propertyKey)">
            Sort
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="row in rows" :key="row[idKey] as PropertyKey">
        <td v-for="col in columns" :key="col.propertyKey">
          <component
            :is="col.renderCell"
            :value="row[col.propertyKey]"
            :row="row"
          />
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
import type { TableProps } from "./Table.types";

const props = defineProps<TableProps<T>>();

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
