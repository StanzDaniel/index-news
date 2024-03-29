import styled from "styled-components";
import InputUser from "./InputUser";
import { ModalError } from "../ModalError";

interface Props {
  label: string;
  name: string;
  value?: string;
  type: string;
  error?: string;
  touched?: boolean;
  accept?: string;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const Label = styled.label`
  position: relative;   
  padding: 5px;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

function InputUserWithLabel({ label, value, name, type, onChange, onBlur, touched, error, accept, placeholder}: Props) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputUser className={`${ touched && error ? 'error' : ''}`} accept={accept} value={value} name={name} type={type} onChange={onChange} onBlur={onBlur} placeholder={placeholder} ></InputUser>
      { touched && error && <ModalError>{error}</ModalError> }
    </Container>
  )
}
export default InputUserWithLabel