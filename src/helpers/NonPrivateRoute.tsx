import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'
import { useRootContext } from '../store/RootContext'

/**
 * react-router-dom の Route の Props
 */
type Props = {
  redirect: string
}

/**
 * 未ログイン時のルート
 */
export default function NonPrivateRoute({
  redirect,
  ...props
}: Props & RouteProps) {
  const { isAuthenticated } = useRootContext()
  return (
    <>
      {isAuthenticated ? (
        <Redirect to={redirect} />
      ) : (
        <Route
          path={props.path}
          exact={props.exact}
          component={props.component}
        />
      )}
    </>
  )
}
