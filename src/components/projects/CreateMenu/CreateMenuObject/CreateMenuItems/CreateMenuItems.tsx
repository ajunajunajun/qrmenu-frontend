import React from 'react'

import '../../../../../styles/projects/_createmenu.scss'
import { itemType } from '../../../../../domains/shopdata'

/**
 * MenuObject の Props
 */
type Props = {
  /** ショップアイテムの情報 */
  item: itemType
}

/**
 * クリエイトメニュー画面のメニューオブジェクトコンポーネント
 */
export default function MenuItems(props: Props) {
  //isCreateModeでon,off指定して使いまわせるようにしたい
  return (
    <div className="p-createmenu-items__object">
      <p className="p-createmenu-items__object--name">{props.item.name}</p>
      <div className="p-createmenu-items__object--img"></div>
      <p className="p-createmenu-items__object--price">￥{props.item.price}</p>
    </div>
  )
}
