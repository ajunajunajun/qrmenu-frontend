import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../ui/Button/Button'
import { useShopContext } from '../../../../store/ShopContext'

/**
 * クリエイトメニュー画面のヘッダー用プロジェクト
 */
export default function CreateMenuHeader() {
  const { isShopdata } = useShopContext()
  const items = isShopdata.shoplist.items

  return (
    <div className="p-createmenuheader">
      <div className="p-createmenuheader-title">
        <p>メニュー作成画面</p>
      </div>
      {/* todo menuに付けたidで動的にリンク先決定する */}
      <Button as={Link} to="/menu/1" items={items}>
        保存
      </Button>
    </div>
  )
}
