import React from 'react'
import '../../../styles/projects/_loginform.scss'
import { useRootContext } from '../../../store/RootContext'
import { shoplist as shoplistJson } from '../../../fixtures/shoplist.json'
import Button from '../../ui/Button/Button'

/**
 * 初めに表示するページ
 */
export default function LoginForm() {
  const { isAuthenticated, setAuthenticate } = useRootContext()

  const { setShopdata } = useRootContext()
  const Login = () => {
    setAuthenticate(!isAuthenticated)
    setShopdata({
      shoplist: shoplistJson[0]
    })
  }
  return (
    <div className="p-loginform">
      <p>loginform</p>
      <p>id</p>
      <input />
      <p>password</p>
      <input />
      <br />
      <Button onClick={Login}>Login</Button>
    </div>
  )
}
