import React from 'react'
import { useMenuContext } from '../../../../store/MenuContext'

/**
 * クリエイトメニュー画面のサイドバー用プロジェクト
 */
export default function CreateMenuSideBar() {
  const { setMenumode } = useMenuContext()
  const modes = ['header', 'kategori', 'items', 'preview']
  return (
    <div className="p-createmenusidebar p-createmenusidebar-inner">
      {modes.map((mode, i) => (
        <button
          onClick={() => {
            setMenumode(i)
          }}
        >
          {mode}
        </button>
      ))}
    </div>
  )
}
