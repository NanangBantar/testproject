import React from "react"

const Button = ({ text, ...rest }) => {
  return (
    <button {...rest} className="ripple button-ripple">{text}</button>
  )
}

export default Button