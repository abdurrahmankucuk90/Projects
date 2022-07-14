import React from 'react'
import { Button, FoodInput, FormContainer, HeaderContainer, MainHeader, Select } from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>
      <MainHeader>FOOD APP</MainHeader>
      <FormContainer>
        <FoodInput placeholder='Search'/>
        <Button>Search</Button>
        <Select>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
          <option value="snacks">Snacks</option>
          <option value="teatime">Teatime</option>
        </Select>

      </FormContainer>
    </HeaderContainer>
  )
}

export default Header