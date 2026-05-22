<script setup lang="ts">
import { formatedDateJp } from '../../utils/utils.calendar';

import type { DateCell } from '../../types/types.calendar';

const props = defineProps<{
  createDate: DateCell[]
  selectedDate: Date
}>()

console.log(props.selectedDate)

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
  <div>
    <div>{{ formatedDateJp(props.selectedDate) }}</div>



  </div>

</template>