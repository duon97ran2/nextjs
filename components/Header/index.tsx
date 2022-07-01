import Link from 'next/link'
import React from 'react'
import style from "./header.module.scss"

type Props = {}

const Header = (props: Props) => {
  return (
    <div className={style.demo}>
      <ul>
        <li><Link href="/" >Home Page</Link></li>
        <li><Link href="/products" >Product Page</Link></li>
        <li><Link href={{pathname:"/products/[detail]",query:{detail:"234234"}}}  >Detail Page</Link></li>
      </ul>
    </div>
  )
}

export default Header