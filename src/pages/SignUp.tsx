import { ChangeEvent, FC, useState } from "react"
import { Button, Checkbox, Input, Wrapper } from "../components/index"

export const SignUp: FC = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [isChecked, setIsChecked] = useState(false)
  const [isVisible, SetIsVisible] = useState(false)

  const onChangeFirstName = (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)
  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
  const onChangeTel = (e: ChangeEvent<HTMLInputElement>) => setTel( e.target.value)
  const onChangeChecked = () => setIsChecked(!isChecked)
  const onChangeVisible = () => SetIsVisible(!isVisible)



  return (
    <Wrapper>
      <div className="tw3-mt-10">
        <p className="tw3-text-3xl tw3-font-medium">Prisijunkite prie klientų portalo</p>
        <form className="tw3-mt-6">
          <div className="tw3-flex">
            <div className="tw3-mr-1">
              <p className="tw3-mb-2 tw3-text-sm tw3-font-semibold">Vardas</p>
              <Input onChangeValue={onChangeFirstName} placeholder="Vardas" type="text" value={firstName} isValid={firstName.length > 5 || firstName.length === 0} />
            </div>
            <div className="tw3-ml-1">
              <p  className="tw3-mb-2 tw3-text-sm tw3-font-semibold">Pavardė</p>
              <Input onChangeValue={onChangeLastName} placeholder="Pavardė" type="text" value={lastName} isValid={lastName.length > 5 || lastName.length === 0} />
            </div>
          </div>
          <div>
            <p className="tw3-mb-2 tw3-text-sm tw3-font-semibold">Paštas</p>
            <Input onChangeValue={onChangeEmail} placeholder="Paštas" type="email" value={email} isValid={email.length > 5 || email.length === 0} />
          </div>
          <div>
            <p className="tw3-mb-2 tw3-text-sm tw3-font-semibold">Telefonas</p>
            <Input onChangeValue={onChangeTel} placeholder="Paštas" type="tel" value={tel} isValid={tel.length > 5 || tel.length === 0}  />
          </div>
          <div>
            <p className="tw3-mb-2 tw3-text-sm tw3-font-semibold">Slaptažodis</p>
            <Input isVisible={isVisible} onChangeVisible={onChangeVisible} onChangeValue={onChangePassword} placeholder="Slaptažodis" type="password" value={password} isValid={password.length > 5 || password.length === 0}  />
          </div>
          <div className="tw3-flex">
            <Checkbox className="tw3-mr-3" isChecked={isChecked} onCheckedChange={onChangeChecked}/>
            <span className="tw3-text-sm">Sutinku su sąlygomis. Sužinokite, kaip naudojame ir saugome jūsų duomenis mūsų <a className="tw3-text-sky-700" href="/"> privatumo politikoje.</a> </span>
          </div>
        </form>
        <Button className="tw3-mt-10">Prisijungti</Button>
        <div className="tw3-text-center tw3-mt-6">
          <a href="/" className="tw3-text-sm tw3-text-sky-700 " >Jau užregistruotas</a>
        </div>
      </div>
    </Wrapper>
  )
}