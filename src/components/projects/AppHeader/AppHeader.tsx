import React from 'react'
import { Link } from 'react-router-dom'

import '../../../styles/projects/_header.scss'
import { useRootContext } from '../../../store/RootContext'
import Button from '../../ui/Button/Button'

/**
 * アプリのヘッダー用プロジェクト
 */
export default function AppHeader() {
  const { isAuthenticated, setAuthenticate } = useRootContext()
  const setAuth = () => {
    setAuthenticate(!isAuthenticated)
  }

  return (
    <header className="p-header p-header-inner">
      <Button as={Link} to="/">
        Home
      </Button>
      {isAuthenticated ? (
        <>
          <Button as={Link} to="/createmenu">
            CreateMenu
          </Button>
          <Button onClick={setAuth}>{String(isAuthenticated)}</Button>
        </>
      ) : (
        <></>
      )}
    </header>
  )
}
