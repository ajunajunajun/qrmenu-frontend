export type shopType = {
  /** 店舗毎のID */
  id: number

  /** 店舗名 */
  name: string

  /** 店舗説明文 */
  text: textType

  /** 店舗の電話番号 */
  number: number

  /** 店舗の住所 */
  address: string

  /** 店舗サイトへのリンク */
  site: string

  /** 店舗商品 */
  items: itemType[]
}

export type textType = {
  /** 説明文のタイトル */
  title: string

  /** 説明文の詳細文 */
  description: string
}

export type itemType = {
  /** 商品id */
  id: number

  /** 商品名 */
  name: string

  /** 商品価格 */
  price: number
}
