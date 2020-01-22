import React, { useState, useEffect } from 'react'
import '../../../styles/utilities/_inner.scss'
import '../../../styles/utilities/_indexpage.scss'
import { Link } from 'react-router-dom'
import axios from 'axios'

//import neko from '../IndexPage/image/topimg_original.jpg'
/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  const [isData, setData] = useState<any>()

  useEffect(() => {
    axios
      .get('http://localhost:8080')
      .then((response: any) => {
        setData(response.data.stores[0].ID)
      })
      .catch((err: Error) => {
        setData(err)
      })
  }, [])

  return (
    <div className="u-inner">
      <p>axios: {isData}</p>
      <div className="u-indexpage-div">
        <div className="u-indexpage-div-IMG">
          <h1 className="u-indexpage-div-title">
            お客様のスマートフォンでオーダーを取りませんか？
          </h1>
          <h1 className="u-indexpage-div-title2">Uself</h1>
        </div>
        <Link to="#" className="u-indexpage-div-button">
          今すぐ始める
        </Link>
      </div>

      <div className="u-indexpage-div2">
        <h1 className="u-indexpage-div2-text">
          ダミーテキスト・ダミー　ダミーテキスト・ダミー
        </h1>
        <div className="u-indexpage-div2-text2">
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ{' '}
          </p>
          <br />
          <Link to="#" className="u-indexpage-div2-button">
            今すぐ始める
          </Link>
        </div>
      </div>

      <div className="u-indexpage-div3">
        <p className="u-indexpage-div3-text">こんなメリットがあります</p>
        <div className="u-indexpage-div3-box">
          <p className="u-indexpage-div3-text2">人手不足の解消</p>
          <p className="u-indexpage-div3-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
        <div className="u-indexpage-div3-box1">
          <p className="u-indexpage-div3-text2">メニューコスト削減</p>
          <p className="u-indexpage-div3-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
        <div className="u-indexpage-div3-box2">
          <p className="u-indexpage-div3-text2">注文機器は不要</p>
          <p className="u-indexpage-div3-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
        <div className="u-indexpage-div3-box3">
          <p className="u-indexpage-div3-text2">簡単にメニュー作成</p>
          <p className="u-indexpage-div3-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
      </div>

      <div className="u-indexpage-div4">
        <p className="u-indexpage-div4-text">Uselfの仕組み</p>
        <div className="u-indexpage-div4-box">
          <p className="u-indexpage-div4-text2">ホールスタッフ</p>
          <p className="u-indexpage-div4-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
        <div className="u-indexpage-div4-box1">
          <p className="u-indexpage-div4-text2">お客様</p>
          <p className="u-indexpage-div4-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
        <div className="u-indexpage-div4-box2">
          <p className="u-indexpage-div4-text2">キッチンスタッフ</p>
          <p className="u-indexpage-div4-text3">
            テストテキストテストテキスト
            <br />
            テストテキストテストテキスト
          </p>
        </div>
      </div>
    </div>
  )
}
