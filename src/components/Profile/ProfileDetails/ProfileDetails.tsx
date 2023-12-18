import { COLORS } from "@/models";
import { ProfileImage } from "../ProfileImage";
import styled from "styled-components";
import { UserInfo } from "./UserInfo";

const ContainerProfileDetails = styled.div`
  width: 100%;
  height: 450px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.4);
  background-color: ${COLORS.SECONDARY_COLOR};
  padding: 10px;
  padding-top: 77px;
`;

export function ProfileDetails() {
  return (
    <ContainerProfileDetails>
      <ProfileImage size={200}/>
      <UserInfo />
    </ContainerProfileDetails>
  );
};
