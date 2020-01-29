import React, { useState, ChangeEvent } from 'react'
import '../../../styles/projects/_loginform.scss'
import { useRootContext } from '../../../store/RootContext'
import { useShopContext } from '../../../store/ShopContext'
import { shoplist as shoplistJson } from '../../../fixtures/shoplist.json'
import Button from '../../ui/Button/Button'

/**
 * 初めに表示するページ
 */
export default function LoginForm() {
  const { isAuthenticated, setAuthenticate } = useRootContext()
  const { setShopdata } = useShopContext()

  const [isId, setId] = useState('')
  const [isPassword, setPassword] = useState('')

  const ChangeId = (event: ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value)
  }

  const ChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const Login = () => {
    console.log(isId, isPassword)
    /*
    setAuthenticate(!isAuthenticated)
    setShopdata({
      shoplist: shoplistJson[0]
    })
    */
  }
  return (
    <div className="p-loginform">
      <p>loginform</p>
      <p>id</p>
      <input value={isId} onChange={event => ChangeId(event)} />
      <p>password</p>
      <input value={isPassword} onChange={event => ChangePassword(event)} />
      <br />
      <Button onClick={Login}>Login</Button>
    </div>
  )
}
