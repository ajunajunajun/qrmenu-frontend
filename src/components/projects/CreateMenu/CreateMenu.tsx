import React from 'react'
import { useShopContext } from '../../../store/ShopContext'
import MenuObject from '../MenuObject/MenuObject'

/**
 * クリエイトメニュー画面のメインプロジェクト
 */
export default function CreateMenu() {
  const { isShopdata } = useShopContext()
  const items = isShopdata.shoplist.items

  return (
    <div className="p-createmenu p-createmenu-inner">
      <div className="p-createmenu-wrapper">
        <div className="p-menuobject">
          {items.map((item, i) => (
            <MenuObject item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
