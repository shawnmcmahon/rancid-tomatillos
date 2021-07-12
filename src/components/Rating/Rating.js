import React from "react"
import "./Rating.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Rating = (props) => {
  const checkNum = (num) => {
    let float = parseInt(num.toString().split('.')[1])
    if (float >= 5) {
      return Math.ceil(num)
    }
    // else if (float > 5) {
    //   return Math.ceil(num)
    // }
    return Math.floor(num)
  }
  const rating = (props.rating.toFixed(1) / 2)
  const rounded = checkNum(rating)
  const stars = new Array(rounded).fill(<FontAwesomeIcon icon="star" className="checked" />)
  const remainder = new Array(5 - rounded).fill(<FontAwesomeIcon icon="star" />)
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
