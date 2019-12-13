import React, { useEffect } from 'react'
import '../../../styles/utilities/_inner.scss'
import '../../../styles/utilities/_indexpage.scss'
import neko from '../IndexPage/image/topimg_original.jpg'
/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  let isChecked = 1
  const CheckChange = (i:number) => {
    isChecked = i 
  }

  useEffect(() => {
  },[isChecked])

  return (
    <div className="u-inner">
      <div className="u-indexpage-div">
        <img className="u-indexpage-IMG" src={neko}alt="猫の画像"/>
        <h1 className="u-indexpage-title">注文一々取ってるとか「馬鹿」じゃねぇの</h1>
        <a href="#" className="u-indexpage-button1">今すぐ始める</a>
      </div>
        <input type="radio" id="P" name="scal" onChange={() => CheckChange(1)} checked={true}/>
        <input type="radio" id="Q" name="scal" onChange={() => CheckChange(2)}/>
        <input type="radio" id="R" name="scal" onChange={() => CheckChange(3)}/>
        <input type="radio" id="S" name="scal" onChange={() => CheckChange(4)}/>
        <input type="radio" id="T" name="scal" onChange={() => CheckChange(5)}/>
      <div className="u-indexpage-div2">
        <h1 className="u-indexpage-text">
          ダミーテキスト・ダミー　ダミーテキスト・ダミー
        </h1>
        <div className="u-indexpage-div3">
          <p>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ{' '}
          </p>
          <br/>
          <a href="#" className="u-indexpage-button2">今すぐ始める</a>
        </div>
      </div>
      <div className="carousel-container">
        <ul className="carousel my-carousel carousel--scale">
          <input className="carousel__activator" type="radio" id="P" name="scale" />
          <input className="carousel__activator" type="radio" id="Q" name="scale" checked/>
          <input className="carousel__activator" type="radio" id="R" name="scale"/>
          <input className="carousel__activator" type="radio" id="S" name="scale"/>
          <input className="carousel__activator" type="radio" id="T" name="scale"/>
          <div className="carousel__controls">
            <label className="carousel__control carousel__control--backward" htmlFor="T"></label>
            <label className="carousel__control carousel__control--forward" htmlFor="Q"></label>
          </div>
          <div className="carousel__controls">
            <label className="carousel__control carousel__control--backward" htmlFor="P"></label>
            <label className="carousel__control carousel__control--forward" htmlFor="R"></label>
          </div>
          <div className="carousel__controls">
            <label className="carousel__control carousel__control--backward" htmlFor="Q"></label>
            <label className="carousel__control carousel__control--forward" htmlFor="S"></label>
          </div>
          <div className="carousel__controls">
            <label className="carousel__control carousel__control--backward" htmlFor="R"></label>
            <label className="carousel__control carousel__control--forward" htmlFor="T"></label>
          </div>
          <div className="carousel__controls">
            <label className="carousel__control carousel__control--backward" htmlFor="S"></label>
            <label className="carousel__control carousel__control--forward" htmlFor="P"></label>
          </div>
          <li className="carousel__slide">
            <h1>P</h1>
          </li>
          <li className="carousel__slide">
            <h1>Q</h1>
          </li>
          <li className="carousel__slide">
            <h1>R</h1>
          </li>
          <li className="carousel__slide">
            <h1>S</h1>
          </li>
          <li className="carousel__slide">
            <h1>T</h1>
          </li>
          <div className="carousel__indicators">
            <label className="carousel__indicator" htmlFor="P"></label>
            <label className="carousel__indicator" htmlFor="Q"></label>
            <label className="carousel__indicator" htmlFor="R"></label>
            <label className="carousel__indicator" htmlFor="S"></label>
            <label className="carousel__indicator" htmlFor="T"></label>
          </div>
        </ul>
      </div>
    </div>
  )
}
