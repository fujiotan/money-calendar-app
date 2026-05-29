<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

import { getCategoryOptions } from '../../constants/money'
import { useMoneyUtils } from '../../utils/utils.money';

import { useMoneyStore } from '../../stores/stores.money';

import type { TransactionData } from '../../types/types.money'
import type { ExpenseType, IncomeType, TransactionType } from "../../constants/money"

const router = useRouter()
const moneyUtils = useMoneyUtils()
const moneyStore = useMoneyStore()

const props = defineProps<{
  editData: TransactionData
}>()

console.log(props.editData)

const editDate = ref<string>(props.editData.date)
const editTransactionType = ref<TransactionType>(props.editData.type)
const editCategoryType = ref<ExpenseType | IncomeType>(props.editData.category)
const editName = ref<string>(props.editData.name)
const editAmount = ref<number>(props.editData.amount)
const message = ref<string>('')

const categoryOptions = computed(() => {
  return getCategoryOptions(editTransactionType.value)
})

const handleEdit = () => {

   message.value = moneyUtils.formValidate(editName.value, editAmount.value)

  const editTransactionData: TransactionData = {
    ...props.editData,
    type: editTransactionType.value,
    category: editCategoryType.value, 
    name: editName.value,
    amount: Number(editAmount.value),
    updatedAt: new Date().toLocaleDateString('sv-SE'), 
  }
  moneyStore.updateData(editTransactionData)

  router.push('/')
}

const handleGoHome = () => {
  router.push('/')
}

</script>

<template>
  <div>
    <form @submit.prevent="handleEdit">
      <div>
        <input type="date" v-model="editDate">
      </div>
      <div>
        <select v-model="editTransactionType">
          <option value="expense">支出</option>
          <option value="income">収入</option>
        </select>
      </div>
      <div>
        <select v-model="editCategoryType">
          <option v-for="(value, key) in categoryOptions" :key="key" :value="key">{{ value }}</option>
        </select>
      </div>
        <div>
        名称 <input type="text" v-model="editName" min="0" step="1" placeholder="対象の品名を入力">
      </div>
      <div>
        金額 <input type="number" v-model.number="editAmount" min="0" step="1">
      </div>
      <button type="button" @click="handleGoHome()">戻る</button>
      <button type="submit">更新する</button>
    </form>
  </div>
</template>


