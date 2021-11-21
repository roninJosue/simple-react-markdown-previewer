import React, {useState} from "react"
import {FaCompressAlt, FaExpandArrowsAlt} from "react-icons/fa";

const ToolBarActions = ({setSectionActive, classActive = 'section-active__1'}) => {
  const [isCompressed, setIsCompressed] = useState(true)
  const handleClick = () => {
    const active = isCompressed ? classActive : ''
    setIsCompressed(!isCompressed)
    setSectionActive(active)
  }
  return (
    <div onClick={handleClick} role='button' className='toolbar-action'>
      {isCompressed ? <FaExpandArrowsAlt/> : <FaCompressAlt/>}
    </div>
  )
}

export default ToolBarActions