import React from "react"

const Editor = ({handleChange, text}) => {
  return(
    <textarea
      name="editor"
      id="editor"
      onChange={handleChange}
      value={text}
    />
  )
}

export default Editor
