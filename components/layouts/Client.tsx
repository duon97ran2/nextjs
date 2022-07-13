import React from 'react'
import { LayoutProps } from '../../models/layou'
import Header from "../Header"

type Props = {}

const Client = ({children}: LayoutProps) => {
  return (
    <div>
      <Header/>
      {children}
    </div>
  )
}

export default Client