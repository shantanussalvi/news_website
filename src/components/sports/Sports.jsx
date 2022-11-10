import React, { useState, useEffect } from "react"
import "../home/hero/hero.css"
import Card from "../home/hero/Card"
import axios from "axios";
import Heading from "../heading/Heading";

const Sports = () => {
const [data, setData] = useState([])
  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&pageSize=4&category=sports&apiKey=aa3cec767e234dcca4fbd1aae984eeaf").then((res) => {
      console.log(res);
      setData(res.data.articles);
    })
  }, [])
  return (
    <>
    <div className="container">
      <Heading title={'Trending Sports News'} />
      <div className='hero'>
        {data.map((value) => {
          return (
            <>
              <Card item={{
                id: 0,
                cover: value.urlToImage,
                category: null,
                title: value.title,
                authorName: value.source.name,
                time: value.publishedAt,
                link: value.url
              }} />
            </>
          )
        })}
      </div>
    </div>
  </>
  )
}

export default Sports