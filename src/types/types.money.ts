import type { ExpenseType, IncomeType, TransactionType } from "../constants/money"

export interface TransactionData{
  id: number
  date: string
  type: TransactionType
  category: ExpenseType | IncomeType
  name: string
  amount: number
  createdAt: string
  updatedAt: string
}