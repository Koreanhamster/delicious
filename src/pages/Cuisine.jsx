import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'



function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`); // :type 자리에 쓰는게 name에 전달되어 들어간다
    const recipes = await data.json();
    setCuisine(recipes.results)
  };

  useEffect(()=>{
    // params의 type이 변할때마다 useEffect도 다시 랜더링되게 해줘
    getCuisine(params.type)
    console.log(params.type);
  },[params.type])

  return (
    <div>
    </div>
  )
}

export default Cuisine 