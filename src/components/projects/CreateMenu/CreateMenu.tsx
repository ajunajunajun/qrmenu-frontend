import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button/Button'
import { useShopContext } from '../../../store/ShopContext'
import MenuObject from './CreateMenuObject/CreateMenuItems/CreateMenuItems'

/**
 * クリエイトメニュー画面のメインプロジェクト
 */
export default function CreateMenu() {
  const { isShopdata } = useShopContext()

  const items = isShopdata.shoplist.items

  return (
    <div className="p-createmenu p-createmenu-inner">
      <div className="p-createmenu-wrapper">
        <div className="p-createmenu-items">
          {items.map((item, i) => (
            <MenuObject item={item} key={i} />
          ))}
        </div>
      </div>
      {/* todo menuに付けたidで動的にリンク先決定する */}
      <Button as={Link} to="/menu/1" items={items}>
        印刷ページ
      </Button>
    </div>
  )
}
