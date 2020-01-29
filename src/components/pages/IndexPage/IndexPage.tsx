import React from 'react'
import '../../../styles/utilities/_inner.scss'
import '../../../styles/utilities/_indexpage.scss'
import { Link } from 'react-router-dom'
import orange from '../IndexPage/image/orange.png'
import img1 from '../IndexPage/image/img1.png'
import img2 from '../IndexPage/image/img2.png'
import img3 from '../IndexPage/image/img3.png'
import img4 from '../IndexPage/image/img4.png'
import img5 from '../IndexPage/image/img5.png'
/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  return (
    <div className="u-inner">
      <div className="u-indexpage-div">
        <div className="u-indexpage-div-box">
          <img
            src={orange}
            alt="オレンジの背景"
            className="u-indexpage-div-box-img"
          />
          <h1 className="u-indexpage-div-title">
            お客様のスマートフォンでオーダーを取りませんか？
          </h1>
          <h1 className="u-indexpage-div-title2">CroU</h1>
        </div>
        <Link to="/login" className="u-indexpage-div-button">
          今すぐ始める
        </Link>
      </div>

      <div className="u-indexpage-div2">
        <h1 className="u-indexpage-div2-text">
          CroU（Create for U）
          <br />
          とは
        </h1>
        <div className="u-indexpage-div2-text2">
          <p>
            人手不足に悩む個人経営の飲食店をターゲットに、注文の対応とメニュー作りをサポート！
            メニューを作る際は多種多様なデザインの複数のテンプレートを利用可能！
            他のサービスと違い、初期費用も最小限に抑えられる！
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
          <img src={img3} alt="" className="u-indexpage-div3-box3-img" />
          <p className="u-indexpage-div3-text2">人手不足の解消</p>
          <p className="u-indexpage-div3-text3">
            Web上で注文のやり取りを済ませるため
            店員は注文を取るためにテーブルに出向く必要が無くなり
            提供に専念することができます。
          </p>
        </div>
        <div className="u-indexpage-div3-box1">
          <img src={img2} alt="" className="u-indexpage-div3-box3-img" />
          <p className="u-indexpage-div3-text2">メニューコスト削減</p>
          <p className="u-indexpage-div3-text3">
            このサービスは電子媒体のメニューを作成し
            閲覧もWeb上のため印刷用紙を必要としません
            そのため紙代を節約できます。
          </p>
        </div>
        <div className="u-indexpage-div3-box2">
          <img src={img1} alt="" className="u-indexpage-div3-box2-img" />
          <p className="u-indexpage-div3-text2">注文機器は不要</p>
          <p className="u-indexpage-div3-text3">
            お客様のスマートフォンから注文されるため
            お店の各テーブルにタブレット端末を置く必要がなくなり
            コスト削減につながります。
          </p>
        </div>
        <div className="u-indexpage-div3-box3">
          <img src={img4} alt="" className="u-indexpage-div3-box3-img" />
          <p className="u-indexpage-div3-text2">簡単にメニュー作成</p>
          <p className="u-indexpage-div3-text3">
            Web上でテンプレートを利用しメニュー作りをサポート！デザインにももう困らず、今までよりも作成時間を短縮できる！
          </p>
        </div>
      </div>

      <div className="u-indexpage-div4">
        <p className="u-indexpage-div4-text">CroUの仕組み</p>
        <p className="u-indexpage-div4-text1">
          お客様は各席ごとの二次元バーコードを読み取ることで
          <br />
          スマートフォンから注文できるようになります。
          <br />
          テーブルの管理はスタッフ専用アプリで、注文が入るとプリンターから出力されます。
        </p>
        <img src={img5} alt="" className="u-indexpage-div4-img" />
        <div className="u-indexpage-div4-box">
          <p className="u-indexpage-div4-text2">ホールスタッフ</p>
          <p className="u-indexpage-div4-text3">
            スタッフ専用アプリでお店全体の座席を管理します。簡単操作でお客様の注文履歴の確認・変更、食べ飲み放題の管理をおこないます。
          </p>
        </div>
        <div className="u-indexpage-div4-box1">
          <p className="u-indexpage-div4-text2">お客様</p>
          <p className="u-indexpage-div4-text3">
            スマートフォンで注文専用の二次元バーコードを読み取って注文ページにアクセスします。会員登録などは不要。どんなお客様でもすぐに注文を始めることができます。
          </p>
        </div>
        <div className="u-indexpage-div4-box2">
          <p className="u-indexpage-div4-text2">キッチンスタッフ</p>
          <p className="u-indexpage-div4-text3">
            調理場ではプリンタから出力された調理伝票を見て調理します。伝票はメニューごとにプリンタを出し分けることも可能です。
          </p>
        </div>
      </div>
    </div>
  )
}
