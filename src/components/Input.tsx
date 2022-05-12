import { ChangeEvent, HTMLInputTypeAttribute , FC } from "react"
import { ReactComponent as VisiblePass } from '../assets/visiblePass.svg'
import { ReactComponent as InVisiblePass } from '../assets/inVisiblePass.svg'


type Props = {
    type: HTMLInputTypeAttribute
    placeholder: string
    isValid: boolean
    isVisible?: boolean
    value: string 
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeVisible?: () => void
  }

const getType = (type: HTMLInputTypeAttribute, isVisible: boolean):HTMLInputTypeAttribute => {
  if(type === 'password' && isVisible)
  {
    return 'text'
  }
  return type
}

export const Input: FC<Props> = ({type, onChangeValue, placeholder, isValid, value, onChangeVisible, isVisible}) => {
 
  return(
    <>
      <div className={ isValid ? "tw3-relative tw3-mb-6" : "tw3-relative"}>
        <div className="tw3-flex">
          {type === 'tel' ? <div className="tw3-p-3 tw3-text-sm tw3-bg-[#E2E8F0] tw3-rounded-l-md tw3-border-y-2 tw3-border-l-2">+370</div> : null}
          <input 
            autoComplete={type ==="password" ? 'on' : 'off'}
            className={ `
           placeholder:tw3-text-sm focus:tw3-outline-none tw3-border-2 tw3-duration-200   tw3-w-full tw3-py-2  tw3-pl-4 tw3-pr-12
           ${type === 'tel' ? ' tw3-rounded-r-md' : 'tw3-rounded-md'}
           ${isValid ? 'focus:tw3-border-sky-600' : 'focus:tw3-border-red-500'}` }
            type={getType(type, !!isVisible)}
            placeholder={placeholder}
            value={value}
            onChange={onChangeValue}
          />
        </div>
        <div onClick={onChangeVisible} className="tw3-cursor-pointer tw3-select-none tw3-top-1/4 tw3-right-4 tw3-absolute">
          {type === 'password' && value.length > 0 && 
          <> {isVisible ? <VisiblePass/> : <InVisiblePass/> }</>
          }
        </div>
      </div>
      { !isValid && <div className="tw3-text-left tw3-text-red-500">{type === 'text' ? "Nurodytas neteisingas prisijungimas" : 'Nurodytas neteisingas slaptažodis'}</div>}
    </>
      
  )
}