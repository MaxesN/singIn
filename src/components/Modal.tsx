import { ChangeEvent, FC, MouseEvent } from "react"
import { Input } from "./Input"
import successful from '../assets/successful.svg'
import close from '../assets/close.svg'

type Props = {
    isActive: boolean
    isSended: boolean
    value: string
    onChangeActive: (e: MouseEvent) => void
    onChangeSended: () => void
    onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Modal: FC<Props> = ({isActive, isSended, onChangeSended, onChangeActive, onChangeValue, value}) => {

  return (
    <>
      {
        <div onClick={onChangeActive} className={ isActive ? "tw3-w-full  tw3-bg-black/40 tw3-h-full tw3-fixed tw3-top-0" : 'tw3-hidden'}>
          <div onClick={(e) => e.stopPropagation()} className="tw3-shadow-md tw3-p-10 tw3-bg-white tw3-rounded-lg tw3-max-w-[535px] tw3-mx-auto tw3-relative tw3-top-1/3">
            {!isSended 
              ? <>
                <p className="tw3-text-3xl  tw3-font-medium">Atstatyti slaptažodį</p>
                <p className="tw3-mt-6">Toliau įveskite savo el. pašto adresą ir mes atsiųsime jums el. laišką su instrukcijomis, kaip iš naujo nustatyti slaptažodį.</p>
                <p className="tw3-mt-6 tw3-mb-2 tw3-font-semibold">El. paštas</p>
                <Input value={value} onChangeValue={onChangeValue} placeholder="El. paštas" type="email" isValid={value.length > 5 || value.length === 0}/>
                <button onClick={value.length > 5 ? onChangeSended : undefined} className={` tw3-mt-2 tw3-duration-200 focus:tw3-outline-none  tw3-rounded-md tw3-text-white tw3-py-2 tw3-px-4 ${value.length > 5 ? 'hover:tw3-bg-teal-700 tw3-bg-teal-600' : 'tw3-bg-teal-600/50'}`}>Pateikti</button>
              </> 
              : 
              <div className="tw3-flex tw3-items-start">
                <img className="" src={successful} alt="successful" />
                <div className="tw3-ml-4">
                  <p className="tw3-text-3xl tw3-leading-7 tw3-mb-4 tw3-font-medium">Patikrink savo paštą</p>
                  <p>Išsiuntėme el. laišką adresu <b>{value}</b> su instrukcijomis, kaip iš naujo nustatyti slaptažodį. </p>
                </div>
              </div>
            }
            <div onClick={onChangeActive}  className={!isSended ? "tw3-absolute tw3-top-12 tw3-cursor-pointer tw3-right-5" : 'tw3-hidden'}>
              <img   src={close} alt="" />
            </div>
          </div>
        </div>
      }
    </>
  )
}