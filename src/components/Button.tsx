import { FC } from "react"

type Props = {
    children: string
    className?: string
  }

export const Button: FC<Props> = ({children, className}) => {

  return (
    <button className={`tw3-bg-[#0EA5E9] tw3-text-[#fff] focus:tw3-outline-none tw3-rounded-md tw3-duration-200 tw3-py-3 tw3-w-full hover:tw3-bg-[#0369A1] ${className}`}>{children}</button>
  )
}