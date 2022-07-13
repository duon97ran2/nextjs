import React from 'react'
import { LayoutProps } from '../../models/layou'

type Props = {}

const Admin = ({children}: LayoutProps) => {
  return (
    <div>
      <div className="grid grid-cols-[200px,auto]">
          <div>
            SideBar
          </div>
          <div>
            {children}
          </div>
      </div>
    </div>
  )
}

export default Admin