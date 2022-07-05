import {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

function Popular() {

  const [popular, setPopular] = useState([]);

useEffect(()=>{
  getPopular();
},[])

  const getPopular = async()=>{
    // popular가 localstorage에 저장되어있는지 확인한다.
    const check = localStorage.getItem('popular');

    if(check){
      // 저장되어있다면, fetching할 필요 없이 배열로 반환받는다.
      setPopular(JSON.parse(check));
    }else{
      // 아무것도 없다면 fetching한다.
      const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`);
      const data = await api.json();

      localStorage.setItem('popular', JSON.stringify(data.recipes))
      setPopular(data.recipes);
      console.log(data.recipes);
    }
  }

  return (
    <div>
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide options={{
          perPage: 4,
          // arrows: false,
          // pagination: false,
          drag: 'free',
          gap: '5rem',
        }}>
        {popular.map((recipe)=>{
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                {/* 링크 연결해서 recipe가 가진 고유의 id를 사용해 url로 이동하게 하기. 이는 :name 인자값으로 들어갈거임 */}
                <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title}/>
                  <Gradient/>
                </Link>
              </Card>
            </SplideSlide>
          )
        })}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }

  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
`

export default Popular;