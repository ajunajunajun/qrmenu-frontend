import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { RootProvider } from '../store/RootContext'
import { ShopProvider } from '../store/ShopContext'
import NonPrivateRoute from '../helpers/NonPrivateRoute'
import PrivateRoute from '../helpers/PrivateRoute'
import IndexPage from './pages/IndexPage/IndexPage'
import CreateMenuPage from './pages/CreateMenuPage/CreateMenuPage'
import MyPage from './pages/MyPage/MyPage'
import AppHeader from './projects/AppHeader/AppHeader'

export default () => (
  <RootProvider>
    <ShopProvider>
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <NonPrivateRoute
            redirect="/my"
            path="/"
            exact={true}
            component={IndexPage}
          />
          <PrivateRoute redirect="/">
            <Switch>
              <Route path="/my" exact={true} component={MyPage} />
              <Route
                path="/createmenu"
                exact={true}
                component={CreateMenuPage}
              />
            </Switch>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </ShopProvider>
  </RootProvider>
)
