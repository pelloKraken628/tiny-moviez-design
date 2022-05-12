import React, { useState } from "react";
import styled from "styled-components";
import DiscoverIcon from "../tools/icons/sidebar/menu/DiscoverIcon";
import HomeIcon from "../tools/icons/sidebar/menu/HomeIcon";
import AwardsIcon from "../tools/icons/sidebar/menu/AwardsIcon";
import CelebritiesIcon from "../tools/icons/sidebar/menu/CelebritiesIcon";
import RecentIcon from "../tools/icons/sidebar/library/RecentIcon";
import TopRatedIcon from "../tools/icons/sidebar/library/TopRatedIcon";
import DownloadedIcon from "../tools/icons/sidebar/library/DownloadedIcon";
import PlaylistsIcon from "../tools/icons/sidebar/library/PlaylistsIcon";
import WatchlistIcon from "../tools/icons/sidebar/library/WatchlistIcon";
import CompletedIcon from "../tools/icons/sidebar/library/CompletedIcon";
import SettingsIcon from "../tools/icons/sidebar/general/SettingsIcon";
import LogOutIcon from "../tools/icons/sidebar/general/LogOutIcon";
const Container = styled.header`
  padding: 48px 0 48px 38px;
  max-width: 248px;
  flex: 1;
  background: #21242d;
  display: flex;
  flex-wrap: wrap;
  row-gap: 60px;
  max-height: 982px;
  user-select: none;
`;
const LogoContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 800;
  color: ${(props) => props.theme.white};
  text-align: center;
  cursor: pointer;
  transition: color 350ms cubic-bezier(0.6, -0.28, 0.74, 0.05);
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.sky};
  }
`;
const LogoTop = styled.h1`
  font-size: 36px;
  margin: 0;
  line-height: 27px;
`;
const LogoBottom = styled.h2`
  font-size: 20px;
  margin: 0;
  line-height: 20px;
`;
const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const MenuTitle = styled.h2`
  font-family: "Lato", "sans-serif";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: rgba(249, 249, 249, 0.67);
`;
const MenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 25px;
  width: 100%;
  cursor: pointer;
`;
const MenuItem = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  & path,
  & ellipse,
  & circle,
  & h3 {
    transition: color 400ms linear;
  }
  &:hover {
    & h3 {
      color: ${(props) => props.theme.sky};
    }
    & path:not(path[fill-rule="evenodd"]),
    & circle {
      stroke: ${(props) => props.theme.sky};
    }
    & path[fill-rule="evenodd"],
    & ellipse {
      fill: ${(props) => props.theme.sky};
    }
  }
`;
const MenuItemTitle = styled.h3`
  font-family: "Lato SemiBold", "sans-serif";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #${(props) => (props.selected ? "00b9ae" : "F9F9F9")};
  border-right: ${(props) => (props.selected ? "2px solid #00b9ae" : "none")};
  text-transform: capitalize;
  flex: 1;
`;
const Sidebar = () => {
  const [selectedIcon, setSelectedIcon] = useState("home");
  return (
    <Container>
      <LogoContainer>
        <LogoTop>TINY</LogoTop>
        <LogoBottom>MOVIEZ</LogoBottom>
      </LogoContainer>
      <MenuContainer>
        <MenuTitle>Menu</MenuTitle>
        <MenuItemContainer>
          <MenuItem onClick={() => setSelectedIcon("home")}>
            <HomeIcon selected={selectedIcon === "home"} />
            <MenuItemTitle selected={selectedIcon === "home"}>
              home
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("discover")}>
            <DiscoverIcon selected={selectedIcon === "discover"} />
            <MenuItemTitle selected={selectedIcon === "discover"}>
              discover
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("awards")}>
            <AwardsIcon selected={selectedIcon === "awards"} />
            <MenuItemTitle selected={selectedIcon === "awards"}>
              awards
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("celebrities")}>
            <CelebritiesIcon selected={selectedIcon === "celebrities"} />
            <MenuItemTitle selected={selectedIcon === "celebrities"}>
              celebrities
            </MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      </MenuContainer>
      <MenuContainer>
        <MenuTitle>Library</MenuTitle>
        <MenuItemContainer>
          <MenuItem onClick={() => setSelectedIcon("recent")}>
            <RecentIcon selected={selectedIcon === "recent"} />
            <MenuItemTitle selected={selectedIcon === "recent"}>
              recent
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("topRated")}>
            <TopRatedIcon selected={selectedIcon === "topRated"} />
            <MenuItemTitle selected={selectedIcon === "topRated"}>
              top rated
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("downloaded")}>
            <DownloadedIcon selected={selectedIcon === "downloaded"} />
            <MenuItemTitle selected={selectedIcon === "downloaded"}>
              downloaded
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("playlists")}>
            <PlaylistsIcon selected={selectedIcon === "playlists"} />
            <MenuItemTitle selected={selectedIcon === "playlists"}>
              playlists
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("watchlist")}>
            <WatchlistIcon selected={selectedIcon === "watchlist"} />
            <MenuItemTitle selected={selectedIcon === "watchlist"}>
              watchlist
            </MenuItemTitle>
          </MenuItem>
          <MenuItem onClick={() => setSelectedIcon("completed")}>
            <CompletedIcon selected={selectedIcon === "completed"} />
            <MenuItemTitle selected={selectedIcon === "completed"}>
              completed
            </MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      </MenuContainer>
      <MenuContainer>
        <MenuItemTitle>General</MenuItemTitle>
        <MenuItemContainer>
          <MenuItem onClick={() => setSelectedIcon("settings")}>
            <SettingsIcon selected={selectedIcon === "settings"} />
            <MenuItemTitle selected={selectedIcon === "settings"}>
              settings
            </MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
        <MenuItemContainer>
          <MenuItem onClick={() => setSelectedIcon("logOut")}>
            <LogOutIcon selected={selectedIcon === "logOut"} />
            <MenuItemTitle selected={selectedIcon === "logOut"}>
              log out
            </MenuItemTitle>
          </MenuItem>
        </MenuItemContainer>
      </MenuContainer>
    </Container>
  );
};

export default Sidebar;
