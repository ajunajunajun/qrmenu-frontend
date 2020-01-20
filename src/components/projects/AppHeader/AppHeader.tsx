import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/layouts/_header.scss'
import { useRootContext } from '../../../store/RootContext'
import Button from '../../ui/Button/Button'
import { shoplist as shoplistJson } from '../../../fixtures/shoplist.json'

/**
 * アプリのヘッダー用プロジェクト
 */
export default function AppHeader() {
  const { isAuthenticated, setAuthenticate } = useRootContext()
  const { setShopdata } = useRootContext()
  const Login = () => {
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
        <Button onClick={Login}>
        {String(isAuthenticated)}
        </Button>
      </div>
    </header>
  )
}
