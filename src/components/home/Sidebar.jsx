import React, { useState } from 'react'
import styled from 'styled-components'
import DiscoverIcon from '../tools/icons/sidebar/DiscoverIcon'
import HomeIcon from '../tools/icons/sidebar/HomeIcon'
import AwardsIcon from '../tools/icons/sidebar/AwardsIcon'
import CelebritiesIcon from '../tools/icons/sidebar/CelebritiesIcon'
const Container = styled.header`
  padding: 48px 0 48px 38px;
  max-width: 248px;
  flex: 1;
  background: #21242d;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
`
const LogoContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  color: #f9f9f9;
  text-align: center;
`
const LogoTop = styled.h1`
  font-size: 36px;
  margin: 0;
  line-height: 27px;
`
const LogoBottom = styled.h2`
  font-size: 20px;
  margin: 0;
  line-height: 20px;
`
const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`
const MenuTitle = styled.h2`
  font-family: "Lato", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(249, 249, 249, 0.67);
`
const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 25px;
  width: 100%;
  cursor: pointer;
`
const MenuItem = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`
const MenuItemTitle = styled.h3`
  font-family: "Lato SemiBold", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #${(props) => (props.selected ? '00b9ae' : 'F9F9F9')};
  border-right: ${(props) => (props.selected ? '2px solid #00b9ae' : 'none')};
  text-transform: capitalize;
  flex: 1;
`
const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState('home')
  return (
    <Container>
      <LogoContainer>
        <LogoTop>TINY</LogoTop>
        <LogoBottom>MOVIEZ</LogoBottom>
      </LogoContainer>
      <MenuContainer>
        <MenuTitle>Menu</MenuTitle>
        <MenuItemContainer>
          <MenuItem onClick={() => setSelectedIcon('home')}>
            <HomeIcon selected={selectedIcon === 'home'} />
            <MenuItemTitle selected={selectedIcon === 'home'}>
              home
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon('discover')}>
            <DiscoverIcon selected={selectedIcon === 'discover'} />
            <MenuItemTitle selected={selectedIcon === 'discover'}>
              discover
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon('awards')}>
            <AwardsIcon selected={selectedIcon === 'awards'} />
            <MenuItemTitle selected={selectedIcon === 'awards'}>
              awards
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon('celebrities')}>
            <CelebritiesIcon selected={selectedIcon === 'celebrities'} />
            <MenuItemTitle selected={selectedIcon === 'celebrities'}>
              celebrities
            </MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      </MenuContainer>
    </Container>
  )
}

export default Sidebar
