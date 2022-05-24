import React from "react";
import styled from "styled-components";
import ExpandMoreIcon from "../../tools/icons/right/ExpandMoreIcon";
import NotificationIcon from "../../tools/icons/right/NotificationIcon";

const Container = styled.div`
  display: flex;
  column-gap: 50px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 280px;
  box-sizing: border-box;
`;
const Notification = styled.div`
  background-color: ${({ theme }) => theme.lowOpBtn};
  border-radius: 15px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid transparent;
  box-sizing: border-box;
  &:hover {
    border: 1px solid ${({ theme }) => theme.sky};
    transition: all 550ms ease;
    & svg path {
    }
  }
`;
const ProfileContainer = styled.h2`
  display: flex;
  align-items: center;
  column-gap: 11px;
`;
const Username = styled.h2`
  font-family: "Lato";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  color: ${({ theme }) => theme.white};
`;
const ExpandMore = styled.div`
  cursor: pointer;
  &:hover {
    & svg path {
      transition: all 550ms ease;
      stroke: ${({ theme }) => theme.sky};
    }
  }
`;
const ProfileCard = styled.div`
  height: 56px;
  width: 56px;
  border: 15px;
  background-image: url(${process.env
    .PUBLIC_URL}/assets/main/right/profilePicture.png);
  background-size: cover;
  border-radius: 15px;
`;
const UserInfo = () => {
  return (
    <Container>
      <Notification>
        <NotificationIcon />
      </Notification>
      <ProfileContainer>
        <Username>Samantha</Username>
        <ExpandMore>
          <ExpandMoreIcon />
        </ExpandMore>
        <ProfileCard />
      </ProfileContainer>
    </Container>
  );
};

export default UserInfo;
