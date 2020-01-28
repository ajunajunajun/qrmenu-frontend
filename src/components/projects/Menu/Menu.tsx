import React, { useState, useEffect } from 'react'

import '../../../styles/projects/_menu.scss'

import { useShopContext } from '../../../store/ShopContext'
import { itemType } from '../../../domains/shopdata'
import MenuObject from './MenuObject/MenuObject'

/**
 * メニューコンポーネント
 */
export default function Menu() {
  const { isShopdata } = useShopContext()
  const items = isShopdata.shoplist.items
  const [isOpen, setOpen] = useState(false)
  const [isModalItem, setModalItem] = useState<itemType>({
    id: -1,
    name: '',
    price: 0,
    description: '',
    img: ''
  })
  const [isCart, setCart] = useState({ cart: [-1] })
  const [isCountHidden, setCountHidden] = useState(true)

  const Modal = (item: itemType): void => {
    if (!isOpen) {
      setModalItem(item)
    }
    setOpen(!isOpen)
  }

  const addToCart = (itemId: number): void => {
    setCart({ cart: [...isCart.cart, itemId] })
  }

  useEffect(() => {
    if (Array.from(new Set(isCart.cart)).length === 1) {
      setCountHidden(true)
    } else {
      setCountHidden(false)
    }
  }, [isCart.cart])

  const postCart = () => {
    console.log(isCart.cart)
    setCart({ cart: [-1] })
  }

  return (
    <div className="p-menu">
      {!isOpen ? (
        <>
          <div className="p-menuobject">
            {items.map((item, i) => (
              <div
                className="p-menuobject__object"
                onClick={() => Modal(item)}
                key={i}
              >
                <MenuObject item={item} />
              </div>
            ))}
          </div>
          <div className="p-menu-wrap">
            <p className="p-menu-count" hidden={isCountHidden}>
              {Array.from(new Set(isCart.cart)).length - 1}
            </p>
            <button className="p-menu-button" onClick={postCart}>
              注文内容
            </button>
          </div>
        </>
      ) : (
        <div className="p-menu-modal">
          <p className="p-menu-modal--name">{isModalItem.name}</p>
          <div className="p-menu-modal--img"></div>
          <p className="p-menu-modal--price">￥{isModalItem.price}</p>
          <p className="p-menu-modal-description">{isModalItem.description}</p>

          <div className="p-menu-wrap">
            <button
              className="p-menu-button"
              onClick={() => addToCart(isModalItem.id)}
            >
              追加
            </button>
          </div>
          {String(isCart.cart)}
          <button
            className="p-menu-modal-closebutton"
            onClick={() => setOpen(!isOpen)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  )
}
