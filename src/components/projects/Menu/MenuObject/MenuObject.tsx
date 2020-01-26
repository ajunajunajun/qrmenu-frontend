import React from 'react'

import { itemType } from '../../../../domains/shopdata'

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
    <div className="p-menuobject__object">
      <p className="p-menuobject__object--name">{props.item.name}</p>
      <div className="p-menuobject__object--img"></div>
      <p className="p-menuobject__object--price">￥{props.item.price}</p>
    </div>
  )
}
