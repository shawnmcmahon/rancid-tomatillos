import React from "react"
import "./Rating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = (props) => {
  const rating = Math.floor((props.rating.toFixed(1) / 2))
  const stars = new Array(rating).fill(<FontAwesomeIcon icon="star" className="checked" />)
  const remainder = new Array(5 - rating).fill(<FontAwesomeIcon icon="star" />)
  const allStars = stars.concat(remainder)
  const copy = [...allStars]
  //
  // const indexedStars = copy.reduce((acc, currentVal, index) => {
  //   console.log(currentVal)
  //   currentVal.id = index
  //   currentVal.key = index
  //   return acc
  // }, [])

  return (
    <h3>{allStars}</h3>
  )
}

export default Rating
