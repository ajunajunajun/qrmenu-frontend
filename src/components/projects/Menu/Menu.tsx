import React from 'react'
import { useShopContext } from '../../../store/ShopContext'
import MenuObject from './MenuObject/MenuObject'

/**
 * メニューコンポーネント
 */
export default function Menu() {
  const { isShopdata } = useShopContext()
  const items = isShopdata.shoplist.items

  return (
    <>
      <div className="p-menuobject">
        {items.map((item, i) => (
          <MenuObject item={item} key={i} />
        ))}
      </div>
    </>
  )
}
