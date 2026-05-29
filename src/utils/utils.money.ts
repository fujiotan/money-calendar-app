
export const useMoneyUtils = () => {

  const formValidate = (productName: string, amount: number):string => {
    if(!productName && amount === 0){
      return "品名と金額を入力してください"
    }else if(!productName) {
      return "品名を入力してください"
    }else if(amount === 0){
      return "金額を入力してください"
    }
    return ""
  }
  return {
    formValidate,
  }
}