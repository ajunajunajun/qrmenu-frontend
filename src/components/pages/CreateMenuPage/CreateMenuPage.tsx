import React from 'react'

import '../../../styles/projects/_createmenu.scss'
import '../../../styles/projects/_menuobject.scss'

import CreateMenuHeader from '../../projects/CreateMenu/CreateMenuHeader/CreateMenuHeader'
import CreateMenuSideBar from '../../projects/CreateMenu/CreateMenuSideBar/CreateMenuSideBar'
import CreateMenu from '../../projects/CreateMenu/CreateMenu'

/**
 * 初めに表示するページ
 */
export default function CreateMenuPage() {
  return (
    <>
      <CreateMenuHeader />
      <CreateMenuSideBar />
      <CreateMenu />
    </>
  )
}
