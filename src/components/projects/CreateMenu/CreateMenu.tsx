import React from 'react'
import MenuObject from '../../ui/MenuObject/MenuObject'
import { useShopContext } from '../../../store/ShopContext'
import { useMenuContext } from '../../../store/MenuContext'

/**
 * クリエイトメニュー画面のメインプロジェクト
 */
export default function CreateMenu() {
  const { isMenumode } = useMenuContext()
  const { isShopdata } = useShopContext()

  const items = isShopdata.shoplist.items

  const Menumode_states = [
    <h1>Header</h1>,
    <h1>Kategori</h1>,
    <h1>Items</h1>,
    <h1>Preview</h1>
  ]
  const elements = [
    <h1>へっだー</h1>,
    <h2>かてごり|かてごり|かてごり</h2>,
    <div className="p-createmenu-items">
      {items.map((item, i) => (
        <MenuObject item={item} key={i} />
      ))}
    </div>
  ]
  const Menumode_elements = [...elements, elements]

  return (
    <div className="p-createmenu p-createmenu-inner">
      {Menumode_states[isMenumode]}
      <div className="p-createmenu-wrapper">
        <canvas className="p-createmenu-canvas" />
        {Menumode_elements[isMenumode]}
      </div>
    </div>
  )
}
