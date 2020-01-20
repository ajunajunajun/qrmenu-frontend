import React from 'react'
import { Link } from 'react-router-dom'

import { useShopContext } from '../../../store/ShopContext'
import '../../../styles/utilities/_mypage.scss'
import '../../../styles/utilities/_inner.scss'
import img1 from '../MyPage/image/img1.jpeg'
import img2 from '../MyPage/image/img2.jpg'
import icon from '../MyPage/image/img3.png'

/**
 * 初めに表示するページ
 */
export default function MyPage() {
  const { isShopdata } = useShopContext()
  const data = isShopdata.shoplist
  return (
    <div className="u-inner">
      <div className="u-mypage-div">
        <div className="u-mypage-div-box">
          <div className="u-mypage-div-box-name">
            <p className="u-mypage-div-box-name-text">
              {data.name}
              <br />
              {data.id}
            </p>
          </div>
          <ul className="u-mypage-div-box-list">
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">プロフィール</p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">
                  プロフィール編集
                </p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">
                  アカウント情報
                </p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">
                  パスワード変更
                </p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">決済履歴</p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">
                  号座情報の登録
                </p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">収益管理</p>
              </Link>
            </li>
            <li className="u-mypage-div-box-list-item2">
              <Link to="#" className="u-mypage-link">
                <p className="u-mypage-div-box-list-item-text">Uselfガイド</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="u-mypage-div2">
          <div className="u-mypage-div2-box"></div>
          <p className="u-mypage-div2-text">プロフィール</p>
          <div className="u-mypage-div2-profile">
            <p className="u-mypage-div2-profile-text">
              {data.text.description}
              <br />
              {data.number}
              <br />
              {data.address}
            </p>
          </div>
        </div>

        <div className="u-mypage-div3">
          <p className="u-mypage-div3-text">メニュー</p>
          <Link to="/createmenu" className="u-mypage-link">
            <div className="u-mypage-div3-box">
              <img
                src={img1}
                alt="メニュー画像1"
                className="u-mypage-div3-box-img"
              />
              <p className="u-mypage-div3-box-text">通常メニュー</p>
            </div>
          </Link>
          <Link to="/createmenu" className="u-mypage-link">
            <div className="u-mypage-div3-box2">
              <img
                src={img2}
                alt="メニュー画像2"
                className="u-mypage-div3-box2-img"
              />
              <p className="u-mypage-div3-box-text">春限定メニュー</p>
            </div>
          </Link>
          <Link to="/createmenu" className="u-mypage-link">
            <img src={icon} alt="追加ボタン" className="u-mypage-div3-button" />
          </Link>
        </div>
      </div>
    </div>
  )
}
