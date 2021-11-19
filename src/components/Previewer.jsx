import React from "react"

const Previewer = ({markedText}) => {

  const createMarkup = () => {
    return {__html: markedText}
  }

  return (
    <div id='previewer' dangerouslySetInnerHTML={createMarkup()}>
    </div>
  )
}

export default Previewer
