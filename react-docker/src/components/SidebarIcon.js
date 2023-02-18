import React from 'react'
import Icon from "../images/icon.png"

function SidebarIcon() {
  return (
    <div className='SidebarIcon'>
        {/* 直接パスは書けない（エラーになる） */}
        <img src={Icon} />
    </div>
  )
}

export default SidebarIcon