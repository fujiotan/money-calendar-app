<script setup lang="ts">
import CalendarHead from '../components/calendar/CalendarHead.vue';
import CalendarBody from '../components/calendar/CalendarBody.vue';

import { useCalendarStore } from '../stores/stores.calendar';
const storeCalendar = useCalendarStore()

</script>


<template>
  <div class="app">
    <div class="calendar-panel">
      <CalendarHead
        :display-month="storeCalendar.displayMonth"
        @prevMonth="storeCalendar.prevMonth"
        @nextMonth="storeCalendar.nextMonth"
      />
      <CalendarBody
        :create-date="storeCalendar.createDate"
        @clickDate="storeCalendar.clickDate"
      />
    </div>
  </div>
</template>