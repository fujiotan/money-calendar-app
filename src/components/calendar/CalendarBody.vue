<script setup lang="ts">
import type { DateCell } from '../../types/types.calendar';

const props = defineProps<{
  createDate: DateCell[]
}>()

const emit = defineEmits<{
  (e: 'clickDate', dateKey: string): void
}>()


</script>


<template>
  <div class="week-row">
    <div class="week-cell" v-for="date in props.createDate" :key="date.id">
      <div class="day-cell"
      :class="{
        today: date.isToday,
        selected: date.isSelected,
        sameMonth: date.isMonth
      }"
      @click="emit('clickDate', date.dateKey)"
      >
        {{ date.dateNum}}
      </div>
    </div>
  </div>
</template>