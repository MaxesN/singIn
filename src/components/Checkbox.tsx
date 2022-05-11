import { FC } from "react"

type Props = {
    isChecked: boolean
    setChecked: () => void
}
export const Checkbox:FC<Props> = ({isChecked, setChecked}) => {
  return(
    <input checked={isChecked} onClick={setChecked} className="tw3-w-[21px] focus:tw3-outline-none tw3-h-[21px]" type="checkbox" />
  )
}