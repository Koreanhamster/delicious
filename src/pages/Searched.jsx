import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import styled  from 'styled-components';

function Searched() {

  const [searchedRecipes, setSearchedRecipes] = useState([])
  let params = useParams();

  const getSearched = async(name)=>{
    // 이번엔 쿼리로 아무 문자나 넣을 수 있게 하기
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}&number=9`);
    const recipes = await data.json();
    setSearchedRecipes(recipes.results)
    console.log(recipes.results);
  };

  useEffect(()=>{
    getSearched(params.search);
    // 업데이트 될 때마다 다시 fetch해주기
    // params. 찍고 type하면 :type이 들어가고 .search하면 :search가 들어감.
    console.log(params.search);
  },[params.search])

  return (
    <Grid>
      {searchedRecipes.map((item)=>{
        return(
          <Card key={item.id}>
            <img src={item.image} alt="" />
            <h4>{item.title}</h4>
          </Card>
        )
      })}
    </Grid>
  )
}

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

export default Searched