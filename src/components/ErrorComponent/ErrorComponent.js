import React from "react"
import { Link } from "react-router-dom"

const ErrorComponent = ({ type, message }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1> { type } Error</h1>
      <h3>Oops! Something went wrong. <Link to="/">Click here to go back home.</Link></h3>
      <h4>{message}</h4>
    </div>
  )
}

export default ErrorComponent
