import React from "react"

const Section = ({active, ...props}) => {
  return (
    <section
      className={`section ${active}`}
    >
      {props.children}
    </section>
  )
}

export default Section