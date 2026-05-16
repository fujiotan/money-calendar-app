<script setup lang="ts">
import { DAY_SET } from '../../constants/calendar'

import { useCalendarStore } from '../../stores/stores.calendar';

const storeCalendar = useCalendarStore()

</script>

<template>
  <h1 class="calendar-header">{{ storeCalendar.displayMonth }}</h1>
  <div class="calendar-month">
    <div><button @click="storeCalendar.prevMonth"><< 前月</button></div>
    <div><button @click="storeCalendar.nextMonth">翌月>></button></div>
  </div>
  <div class="week-row">
    <div class="week-cell" v-for="day in DAY_SET" :key="day">
      <div class="day-cell day">
        {{ day }}
      </div>
    </div>
  </div>
</template>