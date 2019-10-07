import React from 'react'
import { Redirect } from 'react-router-dom'
import { useRootContext } from '../store/RootContext'

/**
 * react-router-dom の Route の Props
 */
type Props = {
  redirect: string
  children: React.ReactNode
}

/**
 * ログイン時のルート
 */
export default function PrivateRoute({ redirect, children }: Props) {
  const { isAuthenticated } = useRootContext()
  return <>{isAuthenticated ? [children] : <Redirect to={redirect} />}</>
}
