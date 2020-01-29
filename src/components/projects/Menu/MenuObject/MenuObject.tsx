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
    <>
      <p className="p-menuobject__object--name">{props.item.name}</p>
      <div className="p-menuobject__object--imgwrap">
        <img
          className="p-menuobject__object--imgwrap__img"
          src={props.item.img}
          alt="商品の写真"
        />
      </div>
      <p className="p-menuobject__object--price">￥{props.item.price}</p>
    </>
  )
}
