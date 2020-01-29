import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Menu from '../../projects/Menu/Menu'

var QRCode = require('qrcode.react')
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

  return (
    <>
      <Menu />
      <QRCode value="https://www.npmjs.com/package/qrcode.react" />
    </>
  )
}
