import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useShopContext } from '../../../store/ShopContext'
import MenuObject from '../../projects/MenuObject/MenuObject'

/**
 * react-router-dom の Route の Props
 */
type RouteProps = RouteComponentProps<{ id: string }>

/**
 * メニュー見るページ
 */
export default function MenuPage(props: RouteProps) {
  /* todo menuId 
    const menuId = props.match.params.id
  */

  const { isShopdata } = useShopContext()
  const items = isShopdata.shoplist.items

  return (
    <div className="p-menuobject">
      {items.map((item, i) => (
        <MenuObject item={item} key={i} />
      ))}
    </div>
  )
}
