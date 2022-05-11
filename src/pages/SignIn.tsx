import { ChangeEvent, FC, MouseEvent, useState } from "react"
import { Button } from "../components/Button"
import { Checkbox } from "../components/Checkbox"
import { Input } from "../components/Input"
import { Modal } from "../components/Modal"
import { Wrapper } from "../components/Wrapper"

type EventChange = ChangeEvent<HTMLInputElement>

export const SignIn: FC = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  const onСhangeName = (e: EventChange) => setName(e.target.value)
  const onСhangePassword = (e: EventChange) => setPassword(e.target.value)
  const onChangeСhecked = () => setIsChecked(!isChecked)
  const onChangeVisible = () => setIsVisible(!isVisible)

  const [isActiveModal, setIsActiveModal] = useState(false)
  const [isSendedModal, setIsSendedModal] = useState(false)
  const [emailModal, setEmailModal] = useState('')

  const onChangeActiveModal = (e: MouseEvent) => {
    setIsActiveModal(!isActiveModal)
    setIsSendedModal(false)
  }
  const onChangeSendedModal = () => setIsSendedModal(!isSendedModal)
  const onСhangeEmailModal = (e: EventChange) => setEmailModal(e.target.value)

  return (
    <>
      <Wrapper>
        <div className="tw3-mt-10">
          <p className="tw3-text-3xl tw3-font-medium">Prisijunkite prie klientų portalo</p>
          <form className="tw3-mt-6">
            <div>
              <p className="tw3-text-left tw3-text-sm tw3-font-semibold tw3-mb-2">Vartotojas</p>
              <Input placeholder="Vartotojo vardas" value={name} type="text" onChangeValue={onСhangeName} isValid={name.length > 5 || name.length === 0} />
            </div>
            <div  className="tw3-mt-1">
              <p className="tw3-text-left tw3-text-sm tw3-font-semibold  tw3-mb-2">Slaptažodis</p>
              <Input value={password} onChangeVisible={onChangeVisible} onChangeValue={onСhangePassword} placeholder="Slaptažodis turi būti sudarytas iš 6 ar daugiau raidžių ir skaičių." type="password" isValid={password.length > 5 || password.length === 0} isVisible={isVisible} />
            </div>
            <div className="tw3-flex tw3-mt-1 tw3-justify-between ">
              <div className="tw3-flex  tw3-items-center ">
                <Checkbox className="tw3-mr-3" isChecked={isChecked} onCheckedChange={onChangeСhecked}/>
                <span className="tw3-text-sm">Kad mane prisimintų</span>
              </div>
              <span onClick={onChangeActiveModal}  className="tw3-text-[#0284C7] tw3-text-sm tw3-cursor-pointer tw3-font-semibold">Pamiršai slaptažodį?</span>
            </div>
          </form>
          <Button className="tw3-mt-10">Prisijungti</Button>
          <div className="tw3-text-sm tw3-mt-6">Neturite paskyros? <a href="/" className="tw3-text-[#0284C7] tw3-font-semibold">Sukurti paskyrą</a></div>
        </div>
      </Wrapper>
      <Modal onChangeActive={onChangeActiveModal} onChangeSended={onChangeSendedModal} onChangeValue={onСhangeEmailModal}  value={emailModal} isActive={isActiveModal} isSended={isSendedModal} />
    </>

  )
}