import { computed } from 'vue'

import { expenses, incomes } from "../constants/money"
import type { ExpenseType, IncomeType } from "../constants/money"


export const getCategoryLavel = (category: ExpenseType | IncomeType) => {
  return expenses[category as ExpenseType] || incomes[category as IncomeType] || category
}

