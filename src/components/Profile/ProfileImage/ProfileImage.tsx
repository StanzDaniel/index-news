import { COLORS, database } from "@/models";
import styled from "styled-components";
import { ProfileProps } from "../Profile";
import { useSelector } from "react-redux";
import emptyProfileImage from "@/assets/profile_image_empty.jpg";

const ImageContainer = styled.div<{size: number}>`
  margin: 15px;
  margin-top: 0;
  height: ${(Props) => Props.size}px;
  width: ${(Props) => Props.size}px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: end;
  gap: 20px;
  align-self: center;

  @media (min-width: 768px) {
    & {
      margin: 0;
      height: ${(Props) => Props.size <= 60 ? 50 : Props.size}px;
      width: ${(Props) => Props.size <= 60 ? 50 : Props.size}px;
      align-self: center;
    }
  }
  
  .profile-image {
    height: 100%; 
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    transition: border 0.4s ease;
    border: 1px solid transparent;
    
    &:hover {
      border: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
    }
  }


`;
interface ImageProps extends ProfileProps {
  onClick?: () => void;
  size?: number;
}

const profileName:  React.CSSProperties | undefined= { 
  fontSize: "0.8rem",
  fontWeight: "400",
  letterSpacing: ".05rem",
  textTransform: "uppercase",
  cursor: "pointer",
  alignSelf: "center",
  marginBottom: "15px",
}

function ProfileImage({showName, onClick, size = 60,}: ImageProps) {
  const user = useSelector((store: any)=> store.user)

  return (
    <>
      <ImageContainer onClick={onClick} size={size}>
        <img
          src={
            user.image
              ? database.SERVER_IMAGE + user.image
              : emptyProfileImage
          }
          onError={({currentTarget}) => {
            currentTarget.onerror = null;
            currentTarget.src = emptyProfileImage;
          }}
          alt='profile image'
          className='profile-image'
        />
      </ImageContainer>
      {showName && (
        <h3 style={profileName}>{user.name ? user.name : 'unknown'}</h3>
      )}
    </>
  );
}
export default ProfileImage