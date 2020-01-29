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
  const [isDetailsModal, setDetailsModal] = useState(false)
  const [isModalItem, setModalItem] = useState<itemType>({
    id: -1,
    name: '',
    price: 0,
    description: '',
    img: ''
  })
  const [isCart, setCart] = useState<{ cart: number[] }>({ cart: [] })
  const [isCartArr, setCartArr] = useState<number[]>([])

  const [isCountHidden, setCountHidden] = useState(true)

  const Modal = (item: itemType): void => {
    if (!isOpen) {
      setModalItem(item)
    }
    setOpen(!isOpen)
  }

  const closeModal = () => {
    setOpen(false)
    setDetailsModal(false)
  }

  const addToCart = (itemId: number): void => {
    setCart({ cart: [...isCart.cart, itemId] })
  }

  useEffect(() => {
    let counts: number[] = []

    for (let i = 0; i < isCart.cart.length; i++) {
      let key = isCart.cart[i]
      counts[key] = counts[key] ? counts[key] + 1 : 1
    }

    setCartArr(counts)
    if (Array.from(new Set(isCart.cart)).length === 0) {
      setCountHidden(true)
    } else {
      setCountHidden(false)
    }
  }, [isCart.cart])

  const openDetails = () => {
    setDetailsModal(true)
    setOpen(!isOpen)
  }

  const postCart = () => {
    console.log(isCart.cart)

    setCart({ cart: [] })
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
              {Array.from(new Set(isCart.cart)).length}
            </p>
            <button className="p-menu-button" onClick={openDetails}>
              注文内容
            </button>
          </div>
        </>
      ) : (
        <div className="p-menu-modal">
          {!isDetailsModal ? (
            <>
              <p className="p-menu-modal--title">{isModalItem.name}</p>
              <button className="p-menu-modal-closebutton" onClick={closeModal}>
                ✕
              </button>
              <div className="p-menu-modal--img"></div>
              <p className="p-menu-modal--price">￥{isModalItem.price}</p>
              <p className="p-menu-modal-description">
                {isModalItem.description}
              </p>
              <div className="p-menu-wrap">
                <button
                  className="p-menu-button"
                  onClick={() => addToCart(isModalItem.id)}
                >
                  追加
                </button>
              </div>
              {String(isCart.cart)}
            </>
          ) : (
            <>
              <p className="p-menu-modal--title">注文内容</p>
              <button className="p-menu-modal-closebutton" onClick={closeModal}>
                ✕
              </button>
              <ul>
                {Array.from(new Set(isCart.cart)).map((itemid, i) => (
                  <li>
                    {i + 1}：{items[itemid].name}：{isCartArr[i]}個
                  </li>
                ))}
              </ul>
              <div className="p-menu-wrap">
                <button className="p-menu-button" onClick={postCart}>
                  注文の確定
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
