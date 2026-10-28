<script setup lang="ts">
import BlockFrame from './BlockFrame.vue'
import type { TableData } from '@/data/blocks'

defineProps<{ block: TableData }>()
</script>

<template>
  <BlockFrame :heading="block.heading" wide>
    <p v-if="block.intro" class="max-w-prose">{{ block.intro }}</p>

    <!-- Desktop table -->
    <table class="hidden w-full border-collapse text-left md:table">
      <thead>
        <tr class="border-b-2 border-project-text">
          <th
            v-for="column in block.columns"
            :key="column"
            scope="col"
            class="text-ui py-3 pr-6 align-bottom"
          >
            {{ column }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-project-dividers">
        <tr
          v-for="(row, rowIndex) in block.rows"
          :key="rowIndex"
          :class="rowIndex === block.highlightRow ? 'text-project-accents' : ''"
        >
          <template v-for="(cell, cellIndex) in row" :key="cellIndex">
            <th
              v-if="cellIndex === 0"
              scope="row"
              class="py-4 pr-6 text-left align-top font-semibold"
            >
              {{ cell }}
            </th>
            <td v-else class="py-4 pr-6 align-top">{{ cell }}</td>
          </template>
        </tr>
      </tbody>
    </table>

    <!-- Mobile list -->
    <ul class="divide-y divide-project-dividers border-y border-project-dividers md:hidden">
      <li
        v-for="(row, rowIndex) in block.rows"
        :key="rowIndex"
        class="space-y-3 py-5"
        :class="rowIndex === block.highlightRow ? 'text-project-accents' : ''"
      >
        <p class="font-semibold">{{ row[0] }}</p>
        <div v-for="(cell, cellIndex) in row.slice(1)" :key="cellIndex" class="space-y-1">
          <p class="text-ui text-project-labels">{{ block.columns[cellIndex + 1] }}</p>
          <p>{{ cell }}</p>
        </div>
      </li>
    </ul>

    <p v-if="block.note" class="max-w-prose">{{ block.note }}</p>
  </BlockFrame>
</template>
