export type shopdataType = {
  shoplist: {
    /** 店舗毎のID */
    id: number

    /** 店舗名 */
    name: string

    /** 店舗説明文 */
    text: {
      /** 説明文のタイトル */
      title: string

      /** 説明文の詳細文 */
      description: string
    }

    /** 店舗の電話番号 */
    number: string

    /** 店舗の住所 */
    address: string

    /** 店舗サイトへのリンク */
    site: string

    /** 店舗商品 */
    items: itemType[]
  }
}

export type itemType = {
  /** 商品id */
  id: number

  /** 商品名 */
  name: string

  /** 商品価格 */
  price: number
}
