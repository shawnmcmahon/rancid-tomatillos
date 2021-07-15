import React from "react"

const ErrorComponent = ({ type }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1> { type } Error</h1>
      <h3>Oops! Something went wrong.</h3>
    </div>
  )
}

export default ErrorComponent
