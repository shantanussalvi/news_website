import React from "react"
import { Link } from "react-router-dom"

const Card = ({ item: { id, cover, category, title, authorName, time, link } }) => {
  return (
    <>
      <div className='box'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          {category !== null ? <span className='category'>{category}</span> : <></>}
          <a href={link}>
            <h1 className='titleBg'>{title}</h1>
          </a>
          <div className='author flex'>
            <span>by {authorName}</span>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
