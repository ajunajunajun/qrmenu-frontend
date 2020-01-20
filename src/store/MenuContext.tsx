import React, { createContext, useState, useMemo, useContext } from 'react'

/** todo type of menu */
export const MenuContext = createContext<{
  isMenudata: any
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
  const [isMenudata, setMenudata] = useState<number>(0)
  const value = useMemo(() => ({ isMenudata, setMenudata }), [isMenudata])
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}
