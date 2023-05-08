import { COLORS } from "@/models";
import styled from "styled-components"

const ProfileContainer = styled.div`
  align-self: end;
  margin: 15px;
  margin-top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  
  & .profile-name {
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: .05rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  & .profile-image {
    height: 100%; 
    border-radius: 50%;
    cursor: pointer;
    transition: border 0.4s ease;
    border: 1px solid transparent;
    
    &:hover {
      border: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
    }
  }

  @media (min-width: 768px) {
    & {
      order: 2;
      margin: 0;
      margin-right: 10px;
      height: 50px;
      align-self: center;
    }
  }
`;
interface Props {
  showName: boolean,
  user?: {name: string, image: string},
}

function Profile({showName, user}: Props) {
  return (
    <ProfileContainer>
      {showName && <h3 className="profile-name">{user ? user.name : "anónimo"}</h3>}
      <img src={user ? user.image : "src/assets/img/profile_image_empty.jpg"} alt="image de perfil" className="profile-image" />
    </ProfileContainer>
  )
}
export default Profile