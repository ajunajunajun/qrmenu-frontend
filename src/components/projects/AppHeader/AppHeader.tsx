import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../../../styles/layouts/_header.scss'
import { useRootContext } from '../../../store/RootContext'
import Button from '../../ui/Button/Button'
import { shoplist as shoplistJson } from '../../../fixtures/shoplist.json'
import { useShopContext } from '../../../store/ShopContext'

/**
 * アプリのヘッダー用プロジェクト
 */
export default function AppHeader() {
  const { isAuthenticated, setAuthenticate } = useRootContext()
  const { setShopdata } = useShopContext()
  const Login = () => {
    /*
    axios
      .post('http://localhost:8080/user', {
        userid: 1234,
        userpass: 'testpass'
      })
      .then(responce => {
        console.log(responce)
      })
      */
    setAuthenticate(!isAuthenticated)
    setShopdata({
      shoplist: shoplistJson[0]
    })
  }
  return (
    <header className="l-header">
      <div className="l-header-inner">
        <Button as={Link} to="/">
          Home
        </Button>
        {isAuthenticated ? (
          <>
            <Button as={Link} to="/createmenu">
              CreateMenu
            </Button>
          </>
        ) : (
          <></>
        )}
        <Button onClick={Login}>{String(isAuthenticated)}</Button>
      </div>
    </header>
  )
}
