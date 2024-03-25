import { count } from "./states"

export const handleAddBtnClick = () => {
  count.value += 10
}
export const handleShowCount = () => {
  console.log(count.value)
}