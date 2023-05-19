import { COLORS } from "@/models";
import styled from "styled-components";
import { ProfileProps } from "../Profile";

const ImageContainer = styled.div`
  align-self: end;
  margin: 15px;
  margin-top: 0;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;

  @media (min-width: 768px) {
    & {
      margin: 0;
      margin-right: 10px;
      height: 50px;
      align-self: center;
    }
  }
  
  .profile-image {
    height: 100%; 
    border-radius: 50%;
    cursor: pointer;
    transition: border 0.4s ease;
    border: 1px solid transparent;
    
    &:hover {
      border: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
    }
  }

  & .profile-name {
    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: .05rem;
    text-transform: uppercase;
    cursor: pointer;
  }
`;
interface ImageProps extends ProfileProps {
  onClick?: () => void;
}

function ProfileImage({showName, user, onClick}: ImageProps) {
  return (
    <ImageContainer onClick={onClick}>
      {showName && <h3 className="profile-name">{user ? user.name : "anónimo"}</h3>}
      <img src={user ? user.image : "src/assets/img/profile_image_empty.jpg"} alt="image de perfil" className="profile-image" />
    </ImageContainer>
  )
}
export default ProfileImage