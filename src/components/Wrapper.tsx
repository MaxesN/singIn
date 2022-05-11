import { FC } from 'react'
import logo from '../assets/logo.png'

type Props = {
    children: JSX.Element
}
export const Wrapper: FC<Props> = ({children}) => {
  return (
    <div className='tw3-m-10 tw3-w-[600px] tw3-rounded tw3-py-11 tw3-shadow-lg tw3-px-16'>
      <div>
        <img className='tw3-mx-auto' src={logo} alt='logo' />
      </div>
      {children}
    </div>
  )
}