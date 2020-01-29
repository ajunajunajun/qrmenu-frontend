import React, { createContext, useState, useMemo, useContext } from 'react'
import { itemType } from '../domains/shopdata'

/** todo type of menu */
export const MenuContext = createContext<{
  isMenudata: itemType
  setMenudata: React.Dispatch<React.SetStateAction<any>>
} | null>(null)

/**
 * MenuContext の Props
 */
type Props = {
  children: React.ReactNode
}

/**
 * MenuContext の null の可能性を消す Hook
 */
export const useMenuContext = () => {
  const state = useContext(MenuContext)
  if (!state) {
    throw new Error("Don't use useMenuContext outside a MenuProvider")
  }
  return state
}

/**
 * 一番外の Provider
 * Login 済みかどうかの情報を保持する
 */
export const MenuProvider = ({ children }: Props) => {
  //一旦any
  const [isMenudata, setMenudata] = useState<any>(null)
  const value = useMemo(() => ({ isMenudata, setMenudata }), [isMenudata])
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
