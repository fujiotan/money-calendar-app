<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { expenses, incomes } from '../../constants/money'
import { useCalendarStore } from '../../stores/stores.calendar'
import { formatedDate } from '../../utils/utils.calendar'

import type { ExpenseType, IncomeType } from '../../constants/money'
import type { transactionData } from '../../types/types.money'

const calendarStore = useCalendarStore()

const STORAGE_KEY = 'strage'

const localStorageItems = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if(!saved) return []

  try {
    const parsed: unknown = JSON.parse(saved)
    if(!Array.isArray(parsed)) return []

    return parsed.filter((item): item is transactionData => {
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

console.log(localStorageItems())

type TransactionType = 'income' | 'expense'

const transactionType = ref<TransactionType>('income')
const transactions = ref<transactionData[]>(localStorageItems())
const transactionDate = ref<String>(formatedDate(calendarStore.selectedDate))
const categoryType = ref< ExpenseType | IncomeType >('salary')
const productName = ref<string>('')
const amount = ref<number>(0)
const message = ref<string>('')

const datas = ref(localStorageItems)
const total = ref<number>(0)

const categoryOptions = computed(()=>{
  return transactionType.value === 'expense' ? expenses : incomes
})

watch(
  transactionType, 
   (newValue) => {
    categoryType.value = newValue === 'income' ? 'salary' : 'life'
  }
)

const onSubmit = () => {
  if(!productName.value && amount.value === 0){
    message.value = "品名と金額を入力してください"
    return
  }else if(!productName.value) {
    message.value = "品名を入力してください"
    return
  }else if(amount.value === 0){
    message.value = "金額を入力してください"
    return
  }

  const transactionData:transactionData = {
    id: new Date().getTime(),
    date: calendarStore.selectedDate,
    type: transactionType.value,
    category: categoryType.value, 
    name: productName.value,
    amount: Number(amount.value),
    createdAt: new Date().toLocaleDateString('sv-SE'),
    updatedAt: new Date().toLocaleDateString('sv-SE'), 
  }
  transactions.value.push(transactionData)

  localStorage.setItem(STORAGE_KEY, JSON.stringify(transactions.value))

  //reset
  transactionType.value = "income"
  productName.value = ''
  amount.value = 0

}

</script>

<template>
  <p>{{ message? message : '' }}</p>
  <form @submit.prevent="onSubmit">
    <div>
      <input type="date" v-model="transactionDate" /> 
    </div>
    <div>
      <select v-model="transactionType">
        <option value="income">収入</option>
        <option value="expense">支出</option>
      </select>
    </div>
    <div>
      <select v-model="categoryType">
        <option v-for="(value, key) in categoryOptions" :key="key" :value="key">{{ value }}</option>
      </select>
    </div>
    <div>
      名称 <input type="text" v-model="productName" min="0" step="1" placeholder="対象の品名を入力">
    </div>
    <div>
      金額 <input type="number" v-model.number="amount" min="0" step="1">
    </div>
    <button type="submit">登録する</button>
  </form>
</template>