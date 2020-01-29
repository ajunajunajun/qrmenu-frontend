import React, { useState, ChangeEvent } from 'react'
import '../../../styles/projects/_loginform.scss'
import axios from 'axios'
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
    axios
      .post('http://localhost:8080/user', {
        userid: Number(isId),
        userpass: String(isPassword)
      })
      .then(responce => {
        if (responce.data.login) {
          setAuthenticate(!isAuthenticated)
          setShopdata({
            shoplist: shoplistJson[0]
          })
        }
      })
  }
  return (
    <>
      <h1 className="p-loginform-div-title2">CroU</h1>
      <div className="cp_iptxt">
        <input
          className="ef"
          type="text"
          placeholder=""
          value={isId}
          onChange={ChangeId}
        />
        <label>ID</label>
        <span className="focus_line"></span>
      </div>
      <div className="cp_iptxt">
        <input
          className="ef"
          type="password"
          placeholder=""
          value={isPassword}
          onChange={ChangePassword}
        />
        <label>パスワード</label>
        <span className="focus_line"></span>
      </div>
      <div className="center">
        <Button onClick={Login}>ログイン</Button>
      </div>
    </>
  )
}
