import React from 'react'
import { useShopContext } from '../../../../../store/ShopContext'

import '../../../../../styles/projects/_createmenu.scss'

/**
 * クリエイトメニュー画面のサイドバー用プロジェクト
 */
export default function CreateMenuEdit() {
  const { isShopdata } = useShopContext()
  const items = isShopdata.shoplist.items
  return (
    <div className="c-createmenuedit">
      {items.map((item, i) => (
        <div className="c-createmenuedit-item">
          <p>{item.id}</p>
          <input
            className="c-createmenuedit-item__input"
            value={item.name}
            placeholder="商品名"
          />
          <input
            className="c-createmenuedit-item__input"
            value={String(item.price)}
            placeholder="価格"
          />
          <button>確定</button>
        </div>
      ))}
    </div>
  )
}
