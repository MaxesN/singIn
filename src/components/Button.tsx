import { FC } from "react"

type Props = {
    children: string
    className?: string
  }

export const Button: FC<Props> = ({children, className}) => {

  return (
    <button className={`tw3-bg-sky-500 tw3-text-white focus:tw3-outline-none tw3-rounded-md tw3-duration-200 tw3-py-3 tw3-w-full hover:tw3-bg-sky-700 ${className}`}>{children}</button>
  )
}