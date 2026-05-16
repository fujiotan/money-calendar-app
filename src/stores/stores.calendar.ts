import { ref, computed } from 'vue'
import { defineStore } from "pinia";

import { formatedDate, formatedMonth, sameDate, sameMonth, createFirstDate } from '../utils/utils.calendar'
import type { DateCell } from '../types/types.calendar'

export const useCalendarStore = defineStore('calendar', () => {

  // スタート時の基準は当日の月日
  const today = new Date()
  const selectedDate = ref<Date>(today)
  // 基準月
  const displayMonth = ref<string>(formatedMonth(selectedDate.value))
  // 選択された日

// head - 前の月
  const prevMonth = () => {
    const prevFirstDate = new Date(selectedDate.value)
    prevFirstDate.setMonth(prevFirstDate.getMonth() - 1)
    prevFirstDate.setDate(1)
    selectedDate.value = prevFirstDate
    displayMonth.value = formatedMonth(prevFirstDate)
  }
// head - 次の月
  const nextMonth = () => {
    const nextFirstDate = new Date(selectedDate.value)
    nextFirstDate.setMonth(nextFirstDate.getMonth() + 1)
    nextFirstDate.setDate(1)
    selectedDate.value = nextFirstDate
    displayMonth.value = formatedMonth(nextFirstDate)
  }

const clickDate = (dateKey: string) => {
  selectedDate.value = new Date(dateKey)
}

const createDate = computed(() => {
  // 該当月の1日 
  const firstDate = new Date(createFirstDate(selectedDate.value)) 
  // 当月の1日の曜日を取得し、カレンダー左上の日付を求める
  const firstDay = firstDate.getDay()
  const startDate = firstDate.setDate(firstDate.getDate() - firstDay)

  // cell用配列
  const dateData: DateCell[] = []

  for (var i = 0; i < 42; i ++) {
    const baseDate = new Date(startDate)
    baseDate.setDate(baseDate.getDate() + i)

    const dateTime = baseDate.getTime()
    const dateNum  = baseDate.getDate()
    const dateKey  = formatedDate(baseDate)
    const isToday  = sameDate(dateKey, formatedDate(today))
    const isMonth  = sameMonth(dateKey, formatedDate(today))
    const isSelected = sameDate(dateKey, formatedDate(selectedDate.value))
    
    dateData.push({
      id: dateTime,
      dateNum: dateNum,
      dateKey: dateKey,
      isToday: isToday,
      isMonth: isMonth,
      isSelected: isSelected
    })
  }
  return dateData
})

  return {
    displayMonth,
    createDate,
    selectedDate,
    prevMonth,
    nextMonth,
    clickDate
  }
})

