<script setup lang="ts">
import { h, ref } from "vue";
import Table from "./Table.vue";
import Table2 from "./Table2.vue";

async function getRows() {
  return {
    data: [
      {
        id: "1",
        value: "aaaa",
        foo: 9,
        position: {
          x: 9,
          y: 9,
        },
      },
    ],
    paginationInfo: {
      pageNumber: 1,
      pageSize: 100,
      totalResults: 1,
    },
  };
}
</script>

<template>
  <Table
    :columns="[
      {
        propertyKey: 'value',
        label: 'xyz',
        renderCell: (notProps) => {
          return h('span', `hello! ${notProps.value}`);
        },

        renderLabel: () => {
          return h('span', 'I am the label');
        },
      },
    ]"
    id-key="id"
    :get-page-fn="getRows"
  ></Table>
  <hr />
  <Table2
    :columns="[
      {
        key: 'value',
      },
      {
        key: 'foo',
      },
      {
        key: 'position',
        renderType: 'template',
      },
    ]"
    id-key="id"
    :get-page-fn="getRows"
  >
    <template #column-id>Id xxx</template>
    <template #column-position>Position xxx</template>

    <template #column-value>Value</template>
    <template #position="position">{{ position.data.position.x }}</template>
    <!-- 
    <template #id="idProps">{{ idProps.data.id }}</template>
    <template #value="valueProps">Foo {{ valueProps.data.value }}</template> -->
  </Table2>
</template>

<style>
table {
  border-collapse: collapse; /* Ensures borders don't double up */
  width: 100%;
}

th,
td {
  border: 1px solid #333; /* Dark grey border */
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2; /* Optional: light grey for headers */
}
</style>
