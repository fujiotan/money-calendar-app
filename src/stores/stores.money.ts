import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { formatedDate } from '../utils/utils.calendar'
import type { TransactionData } from '../types/types.money'

import { useCalendarStore } from './stores.calendar'

export const useMoneyStore = defineStore('money', () =>{

  const useCalendar = useCalendarStore()

  const STORAGE_KEY = 'strage'

  const localStorageItems = () => {
    const saved = localStorage.getItem(STORAGE_KEY)
    if(!saved) return []
    try {
      const parsed: unknown = JSON.parse(saved)
      if(!Array.isArray(parsed)) return []
      return parsed.filter((item): item is TransactionData => {
        return (
          typeof item === 'object' &&
          item !== null &&
          'id' in item &&
          'date' in item &&
          'type' in item &&
          'category' in item &&
          'name' in item &&
          'amount' in item &&
          'createdAt' in item &&
          'updatedAt' in item 
        )
      })
    }catch{
      return []
    }
  }

  const transactions = ref<TransactionData[]>(localStorageItems())
  const editDataId = ref<number>()

  const saveStrage = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions.value)) 
  }

  const addData = (transactionData: TransactionData ) => {
    if(!transactions.value) return
    transactions.value.push(transactionData)
    saveStrage()
  }

  const selectedDateData = computed(()=>{
    if(!transactions.value) return []
    return transactions.value.filter(item => {
      return item.date === formatedDate(useCalendar.selectedDate)
    })
  })

  const deleteData = (id: number) => {
    if(!transactions.value) return
    transactions.value = transactions.value.filter(item => {
      return item.id !== id
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions.value))
  }

  const editData = computed(() => {
    return transactions.value.find(item => {
      return item.id === editDataId.value
    })
  })

  const updateData = (updateData: TransactionData) => {
    const index = transactions.value.findIndex(item => {
      return item.id === updateData.id
    })
    if(index === -1) return 
    transactions.value[index] = updateData
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions.value))
  }

  return {
    STORAGE_KEY,
    transactions,
    editDataId,
    editData,
    selectedDateData,
    localStorageItems,
    addData,
    deleteData,
    updateData
  }

})