import { FC } from "react"
type Props = {
    children: string
}

export const Button: FC<Props> = ({children}) => {

  return (
    <button className="tw3-bg-[#0EA5E9] focus:tw3-outline-none tw3-rounded-md tw3-duration-200 tw3-py-4 tw3-w-full hover:tw3-bg-[#0369A1]">{children}</button>
  )
}