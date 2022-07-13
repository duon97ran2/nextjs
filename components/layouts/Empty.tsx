import React from 'react'
import { LayoutProps } from '../../models/layou'

type Props = {}

const Empty = ({children}: LayoutProps) => {
  return (
    <div>{children}</div>
  )
}

export default Empty