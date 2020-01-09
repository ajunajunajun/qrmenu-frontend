import React from 'react'

import '../../../styles/projects/_createmenu.scss'
import CreateMenuSideBar from '../../projects/CreateMenu/CreateMenuSideBar/CreateMenuSideBar'
import CreateMenu from '../../projects/CreateMenu/CreateMenu'
import { MenuProvider } from '../../../store/MenuContext'

/**
 * 初めに表示するページ
 */
export default function CreateMenuPage() {
  return (
    <MenuProvider>
      <CreateMenuSideBar />
      <CreateMenu />
    </MenuProvider>
  )
}
