import React from 'react'
import { useRootContext } from '../../../store/RootContext'

/**
 * 初めに表示するページ
 */
export default function MyPage() {
  const { isShopdata } = useRootContext()
  const data = isShopdata.shoplist
  return (
    <div className="l-inner">
      <h1>MyPage</h1>
      <h2>MyPage dayo~</h2>
      <p>{data.id}</p>
      <p>{data.name}</p>
      <p>{data.text.title}</p>
      <p>{data.text.description}</p>
      <p>{data.number}</p>
      <p>{data.address}</p>
      <p>{data.site}</p>
      {data.items.map(item => (
        <p>
          {item.id}
          {item.name}
          {item.price}
        </p>
      ))}
    </div>
  )
}
