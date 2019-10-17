import React from 'react'
import '../../../styles/utilities/_inner.scss'
import LoginForm from '../../projects/LoginForm/LoginForm'

/**
 * 初めに表示するページ
 */
export default function IndexPage() {
  return (
    <div className="u-inner">
      <h1>IndexPage</h1>
      <h2>IndexPage dayo~</h2>
      <p>
        この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れ{' '}
      </p>
      <LoginForm />
    </div>
  )
}
