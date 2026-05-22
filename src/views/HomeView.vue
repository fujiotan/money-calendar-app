<script setup lang="ts">
import CalendarHead from '../components/calendar/CalendarHead.vue';
import CalendarBody from '../components/calendar/CalendarBody.vue';
import CalendarModal from '../components/calendar/CalendarModal.vue';

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
        :selected-date="storeCalendar.selectedDate"
        @clickDate="storeCalendar.clickDate"
      />
      <CalendarModal
        
      />
    </div>
  </div>
</template>