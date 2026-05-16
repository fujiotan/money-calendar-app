// 同日判定(2000-01-01 === 2000-01-01)
export const sameDate = ( aDate: string, bDate: string): boolean => {
  return aDate === bDate
}

// 同月判定(2000-01 === 2000-01)
export const sameMonth = ( aDate: string, bDate: string ): boolean => {
  return aDate.slice(0, 7) === bDate.slice(0, 7)
}

// YYYY-mm-dd形式
export const formatedDate = ( date: Date ): string => {
  if(!date) return ''
  return `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

// 2000-01-01
export const createFirstDate = (date:Date) => {
  return `${String(date.getFullYear())}-${String(date.getMonth() + 1).padStart(2, '0')}-01`
}

// 月表示
export const formatedMonth = (date: Date): string => {
  return `${date.getFullYear()}年${date.getMonth() + 1}月`
}

