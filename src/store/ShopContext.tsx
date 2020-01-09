import React, { createContext, useState, useMemo, useContext } from 'react'
import { shopdataType } from '../domains/shopdata'

export const ShopContext = createContext<{
  isShopdata: shopdataType
  setShopdata: React.Dispatch<React.SetStateAction<shopdataType>>
} | null>(null)

/**
 * ShopContext の Props
 */
type Props = {
  children: React.ReactNode
}

/**
 * ShopContext の null の可能性を消す Hook
 */
export const useShopContext = () => {
  const state = useContext(ShopContext)
  if (!state) {
    throw new Error("Don't use useShopContext outside a ShopProvider")
  }
  return state
}

/**
 * 一番外の Provider
 * Login 済みかどうかの情報を保持する
 */
export const ShopProvider = ({ children }: Props) => {
  const [isShopdata, setShopdata] = useState<shopdataType>({
    shoplist: {
      id: -1,
      name: '',
      text: { title: '', description: '' },
      number: '',
      address: '',
      site: '',
      items: []
    }
  })
  const value = useMemo(() => ({ isShopdata, setShopdata }), [isShopdata])
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
