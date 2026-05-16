<script setup lang="ts">
import { ref, computed } from 'vue'

import { useCalendarStore } from '../../stores/stores.calendar'
const storeCalendar = useCalendarStore()

</script>


<template>
  <div class="week-row">
    <div class="week-cell" v-for="date in storeCalendar.createDate" :key="date.id">
      <div class="day-cell"
      :class="{
        today: date.isToday,
        selected: date.isSelected,
        sameMonth: date.isMonth
      }"
      @click="storeCalendar.clickDate(date.dateKey)"
      >
        {{ date.dateNum}}
      </div>
    </div>
  </div>
</template>