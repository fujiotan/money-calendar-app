<script setup lang="ts">
import CalendarHead from '../components/calendar/CalendarHead.vue';
import CalendarBody from '../components/calendar/CalendarBody.vue';
import CalendarModal from '../components/calendar/CalendarModal.vue';

import { useCalendarStore } from '../stores/stores.calendar';
import { useMoneyStore } from '../stores/stores.money'

const calendarStore = useCalendarStore()
const moneyStore = useMoneyStore()

</script>


<template>
  <div class="app">
    <div class="calendar-panel">
      <CalendarHead
        :display-month="calendarStore.displayMonth"
        @prevMonth="calendarStore.prevMonth"
        @nextMonth="calendarStore.nextMonth"
      />
      <CalendarBody
        :create-date="calendarStore.createDate"
        :selected-date="calendarStore.selectedDate"
        @clickDate="calendarStore.clickDate"
      />
      <CalendarModal
        :selected-date="calendarStore.selectedDate"
        :selected-date-data="moneyStore.selectedDateData"
        @delete="moneyStore.deleteData"
      />
    </div>
  </div>
</template>