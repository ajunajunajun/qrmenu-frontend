import React from 'react'
import CreateMenuEdit from './CreateMenuEdit/CreateMenuEdit'

/**
 * クリエイトメニュー画面のサイドバー用プロジェクト
 */
export default function CreateMenuSideBar() {
  return (
    <div className="p-createmenusidebar">
      <div className="p-createmenusidebar-title">
        <p>タブの追加</p>
      </div>
      <div className="p-createmenusidebar-inner">
        <CreateMenuEdit />
      </div>
    </div>
  )
}
