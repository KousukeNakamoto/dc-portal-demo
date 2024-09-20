import { SideVarType } from '@/types/sidebarType'
import { Logout } from './Logout'
import React from 'react'

export const Sidebar = (props: SideVarType) => {
  return (
    <div className="w-[20%] bg-slate-200 flex flex-col justify-between pt-[2%] px-[1%]">
      <h1>Sidebar</h1>
      <ul>
        {props.navigationItems.map((items) => (
          <React.Fragment key={items.id}>
            {items.subItem === undefined ? (
              <div>{items.label}</div>
            ) : (
              <div>{items.id}</div>
            )}
          </React.Fragment>
        ))}
      </ul>
      <Logout />
    </div>
  )
}
