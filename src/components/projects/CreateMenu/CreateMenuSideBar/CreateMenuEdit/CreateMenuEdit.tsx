import React, { useEffect, useState, ChangeEvent } from 'react'
import { useShopContext } from '../../../../../store/ShopContext'

import '../../../../../styles/projects/_createmenu.scss'

/**
 * クリエイトメニュー画面のサイドバー用プロジェクト
 */
export default function CreateMenuEdit() {
  const { isShopdata, setShopdata } = useShopContext()
  const [items, setItems] = useState(isShopdata.shoplist.items)

  const ChangeValue = (
    event: ChangeEvent<HTMLInputElement>,
    i: number,
    category: 'name' | 'price' | 'description'
  ): void => {
    switch (category) {
      case 'name':
        items[i].name = event.target.value
        break
      case 'price':
        // 整数チェック
        const pattern = /^\d*$/

        if (!event.target.value.match(pattern)) {
          break
        }

        items[i].price = Number(event.target.value)
        break
      case 'description':
        items[i].description = event.target.value
        break
    }
    setItems([...items])
  }

  /* changevalueでの値をproviderに渡す */
  useEffect(() => {
    const value = isShopdata.shoplist
    value.items = items
    setShopdata({
      shoplist: value
    })
  }, [items, isShopdata.shoplist, setShopdata])

  return (
    <div className="c-createmenuedit">
      {items.map((item, i) => (
        <div className="c-createmenuedit-item" key={i}>
          <p>ID：{item.id}</p>
          <div className="c-cretemenuedit-element">
            商品名：
            <input
              className="c-createmenuedit-item__input"
              value={item.name}
              placeholder="商品名"
              onChange={event => ChangeValue(event, i, 'name')}
            />
          </div>
          <div className="c-cretemenuedit-element">
            価　格：
            <input
              className="c-createmenuedit-item__input"
              value={String(item.price)}
              placeholder="価格"
              onChange={event => ChangeValue(event, i, 'price')}
            />
          </div>
          <div className="c-cretemenuedit-element">
            説　明：
            <input
              className="c-createmenuedit-item__input"
              value={String(item.description)}
              placeholder="説明"
              onChange={event => ChangeValue(event, i, 'description')}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
