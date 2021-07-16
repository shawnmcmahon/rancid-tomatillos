import React from "react"
import "./Rating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = ({ rating }) => {
  const checkNum = (num) => {
    let float = parseInt(num.toString().split('.')[1])
    if (float >= 5) {
      return Math.ceil(num)
    }
    return Math.floor(num)
  }
  const rounded = checkNum((rating.toFixed(1) / 2))
  let stars = []
  let remainder = []
  for (let i = 0; i < rounded; i++) {
    stars.push(<FontAwesomeIcon key={Math.floor(Math.random() * Date.now() + i)} icon="star" className="checked" />)
  }
  for (let i = 0; i < (5 - rounded); i++) {
    remainder.push(<FontAwesomeIcon key={Math.floor(Math.random() * Date.now() + i)} icon="star" />)
  }
  //
  // const stars = new Array(rounded).fill(<FontAwesomeIcon icon="star" className="checked" />)
  // const remainder = new Array(5 - rounded).fill(<FontAwesomeIcon icon="star" />)
  const allStars = stars.concat(remainder)

  return (
    <h2>{allStars}</h2>
  )
}

export default Rating
