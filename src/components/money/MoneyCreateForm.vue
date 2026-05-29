<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { formatedDate } from '../../utils/utils.calendar'
import { useCalendarStore } from '../../stores/stores.calendar'
import { useMoneyStore } from '../../stores/stores.money'
import { getCategoryOptions } from '../../constants/money'
import { useMoneyUtils } from '../../utils/utils.money'

import type { ExpenseType, IncomeType, TransactionType } from '../../constants/money'
import type { TransactionData } from '../../types/types.money'

const router = useRouter()
const calendarStore = useCalendarStore()
const moneyStore = useMoneyStore()
const moneyUtils = useMoneyUtils()

const transactionType = ref<TransactionType>('expense')

const transactionDate = ref<string>(formatedDate(calendarStore.selectedDate))
const categoryType = ref< ExpenseType | IncomeType >('life')
const name = ref<string>('')
const amount = ref<number>(0)
const message = ref<string>('')

const handleSubmit = () => {

  message.value = moneyUtils.formValidate(name.value, amount.value)

  const transactionData: TransactionData = {
    id: new Date().getTime(),
    date: transactionDate.value,
    type: transactionType.value,
    category: categoryType.value, 
    name: name.value,
    amount: Number(amount.value),
    createdAt: new Date().toLocaleDateString('sv-SE'),
    updatedAt: new Date().toLocaleDateString('sv-SE'), 
  }
  moneyStore.addData(transactionData)

  //reset
  router.push('/')
}
</script>

<template>
  <p>{{ message? message : '' }}</p>
  <form @submit.prevent="handleSubmit">
    <div>
      <input type="date" v-model="transactionDate" /> 
    </div>
    <div>
      <select v-model="transactionType">
        <option value="expense">支出</option>
        <option value="income">収入</option>
      </select>
    </div>
    <div>
      <select v-model="categoryType">
        <option v-for="(value, key) in getCategoryOptions(transactionType)" :key="key" :value="key">{{ value }}</option>
      </select>
    </div>
    <div>
      名称 <input type="text" v-model="name" min="0" step="1" placeholder="対象の品名を入力">
    </div>
    <div>
      金額 <input type="number" v-model.number="amount" min="0" step="1">
    </div>
    <button type="submit">登録する</button>
  </form>
</template>