import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {Link, useParams} from 'react-router-dom'



function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=9`);
    const recipes = await data.json();
    setCuisine(recipes.results)
  };

  useEffect(()=>{
    getCuisine(params.type)
  },[params.type])

  return (
    <Grid>
      {cuisine.map((item)=>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt=''/>
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

// 0. 마운트 과정이 진행된다.
// 1. state초기화와 함께 '얍'이 실행된다.
// 2. 렌더링이 진행된다.
// 3. useEffect가 실행된다. 
// 4. 만들어둔 getCuisine함수를 실행한다.
// 5. stateUpdate가 진행된다.
// 6. 업데이트가 진행된다.
// 7. 만들어둔 얍이 실행된다.
// 8. 렌더링이 진행된다.




const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img{
    width: 100%;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  a{
    text-decoration: none;
  }

  h4{
    text-align: center;
    padding: 1rem;
  }
`

export default Cuisine 