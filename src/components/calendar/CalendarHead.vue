<script setup lang="ts">
import { DAY_SET } from '../../constants/calendar'

const props = defineProps<{
  displayMonth: string
}>()

const emit = defineEmits<{
  (e: 'prevMonth'): void
  (e: 'nextMonth'): void
}>()

</script>

<template>
  <h1 class="calendar-header">{{ displayMonth }}</h1>
  <div class="calendar-month">
    <div><button @click="emit('prevMonth')"><< 前月</button></div>
    <div><button @click="emit('nextMonth')">翌月>></button></div>
  </div>
  <div class="week-row">
    <div class="week-cell" v-for="day in DAY_SET" :key="day">
      <div class="day-cell day">
        {{ day }}
      </div>
    </div>
  </div>
</template>