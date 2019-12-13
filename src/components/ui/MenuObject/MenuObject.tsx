import React from 'react'

import '../../../styles/projects/_createmenu.scss'
import { itemType } from '../../../domains/shopdata'

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
export default function MenuObject(props: Props) {
  //isCreateModeでon,off指定して使いまわせるようにしたい
  return (
    <div className="p-createmenu-items__object">
      <p>{props.item.name}</p>
      <p>{props.item.id}</p>
      <p>{props.item.price}</p>
    </div>
  )
}
