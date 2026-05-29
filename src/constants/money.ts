export const expenses = {
  life: '生活',
  food: '食費',
  leisure: '娯楽',
  transport: '交通',
  internet: '通信',
  loan: '返済',
  etc: 'その他'
} as const
export type ExpenseType = keyof typeof expenses

export const incomes = {
  salary: '給与',
  bonus: '賞与',
  sideJob: '副業', 
  extraIncome: '臨時収入'
} as const
export type IncomeType = keyof typeof incomes

export const transactionTypes = {
  income: '収入',
  expense: '支出'
} as const
export type TransactionType = keyof typeof transactionTypes

export const getCategoryOptions = (type: TransactionType) => {
  return type === 'expense' ? expenses : incomes
}