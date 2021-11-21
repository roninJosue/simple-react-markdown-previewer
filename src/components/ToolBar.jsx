import React from "react"
import Icon from "./Icon";
import ToolBarActions from "./ToolBarActions";

const ToolBar = (
  {
    icon,
    text,
    setSectionActive,
    active = 'section-active__1'
  }
) => {
  return (<div className='toolbar'>
    <div className='toolbar-icons'>
      <Icon
        icon={icon}
      />
      <span className='toolbar-icons-text'>{text}</span>
    </div>
    <ToolBarActions
      setSectionActive={setSectionActive}
      classActive={active}
    />
  </div>)
}

export default ToolBar