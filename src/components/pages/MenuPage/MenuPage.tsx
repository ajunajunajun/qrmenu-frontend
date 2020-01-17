import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

/**
 * react-router-dom の Route の Props
 */
type RouteProps = RouteComponentProps<{ id: string }>

/**
 * メニュー見るページ
 */
export default function MenuPage(props: RouteProps) {
  /*
  menuId使ってdbからmenu持ってくる
  const menuId = props.match.params.id
  */
  return <></>
}
