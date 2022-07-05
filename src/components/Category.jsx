import {FaPizzaSlice} from 'react-icons/fa'
import {GiNoodles, GiBowlOfRice, GiBubblingBowl} from 'react-icons/gi'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


import React from 'react'

function Category() {
  return (
    <List>
      <NavLink to={'/cuisine/Italian'}>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={'/cuisine/Vietnamese'}>
        <GiNoodles/>
        <h4>Vietnamese</h4>
      </NavLink>
      <NavLink to={'/cuisine/Thai'}>
        <GiBubblingBowl/>
        <h4>Thai</h4>
      </NavLink>
      <NavLink to={'/cuisine/Korean'}>
        <GiBowlOfRice/>
        <h4>Korean</h4>
      </NavLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;

  div{
    margin-right: 1rem;
  }
`

export default Category;  