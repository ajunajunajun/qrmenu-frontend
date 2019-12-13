import React from 'react'
import '../../../styles/utilities/_inner.scss'
import '../../../styles/utilities/_indexpage.scss'
import neko from '../IndexPage/image/topimg_original.jpg'
/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  return (
    <div className="u-inner">
      <div className="u-indexpage-div">
        <img className="u-indexpage-IMG" src={neko} alt="猫の画像" />
        <h1 className="u-indexpage-title">
          注文一々取ってるとか「馬鹿」じゃねぇの
        </h1>
        <a href="#" className="u-indexpage-button1">
          今すぐ始める
        </a>
      </div>
      <div className="u-indexpage-div2">
        <h1 className="u-indexpage-text">
          ダミーテキスト・ダミー　ダミーテキスト・ダミー
        </h1>
        <div className="u-indexpage-div3">
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ{' '}
          </p>
          <br />
          <a href="#" className="u-indexpage-button2">
            今すぐ始める
          </a>
        </div>
      </div>
    </div>
  )
}
