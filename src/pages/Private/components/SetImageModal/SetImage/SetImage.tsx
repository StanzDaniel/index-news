import { ButtonPrimary, FormUser, InputUserWithLabel, Spinner } from "@/components";
import { useClickOutside } from "@/hooks";
import { COLORS } from "@/models";
import { uploadImage } from "@/services";
import { useRef, useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000a3;
  z-index: 9;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;


const ChangeImageDiv = styled.div`
  background-color: ${COLORS.PRIMARY_COLOR_ALPHA};
  display: flex;
  flex-direction: column;
  padding: 40px;
  position: relative;
  justify-content: space-around;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 4px 4px 10px 3px ${COLORS.SECONDARY_COLOR_ALPHA};
  width: 400px;
  padding-top: 20px;
  max-width: 400px;
  margin-top: 100px;

`;

const PreviewImage = styled.img`
  width: 200px; 
  height: 200px;
  border-radius: 50%;
  cursor: pointer;
  transition: border 0.4s ease;
  border: 1px solid transparent;
  object-fit: cover;

  &:hover {
    border: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
  }
`;


function SetImage({toggleModal}: {toggleModal: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const setImageRef = useRef(null);

  useClickOutside(setImageRef, toggleModal)


  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      
      const reader = new FileReader();

      reader.onload = (event) =>{
        if (event.target) {
          setPreview(event.target.result as string);
        }
      }
      setImage(file);
      reader.readAsDataURL(file);
    }
  }

  return (
    <ModalContainer>
      <ChangeImageDiv ref={setImageRef}>
        <h3 className='paddingBottom20px'>{'Change Profile Image'}</h3>
        <InputUserWithLabel
          type='file'
          name='file'
          label='select file'
          accept='.jpg, .jpeg, .png'
          onChange={e => handleChangeFile(e)}
        />
        {image && (
          <>
            <PreviewImage src={preview} />
            <ButtonPrimary
              onClick={async e => {
                setIsSubmitting(true);
                e.preventDefault();
                const result = await uploadImage(image);
                result ? toggleModal(false) : setIsSubmitting(false);
              }}>
              {isSubmitting ? <Spinner size={16} /> : 'Upload Image'}
            </ButtonPrimary>
          </>
        )}
      </ChangeImageDiv>
    </ModalContainer>
  );
}
export default SetImage