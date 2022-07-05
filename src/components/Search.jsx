import styled from 'styled-components'
import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'

function Search() {

  const [input, setInput] = useState('');

  return (
    <FormStyle>
      <div>
        <FaSearch></FaSearch>
        <input onChange={(e)=> setInput(e.target.value)} type='text' value={input}></input>
      </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
  margin: 0rem 20rem;  

  div {
    width: 100%;
    position: relative; //안에 아이콘 올리려고
  }

  input{
    border: none;
    background: linear-gradient(35deg, #6a6a6a, #313131);
    font-size: 1.5rem;
    color: #ffffff;
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    margin-left: 0.5rem;
  }

  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  } 
`

export default Search