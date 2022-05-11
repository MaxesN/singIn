import { FC } from "react"

type Props = {
    className?: string
    isChecked: boolean
    onCheckedChange: () => void
}
export const Checkbox:FC<Props> = ({isChecked, onCheckedChange, className}) => {
  return(
    <input checked={isChecked} onChange={onCheckedChange} className={`tw3-w-[21px] focus:tw3-outline-none tw3-h-[21px] ${className}`} type="checkbox" />
  )
}