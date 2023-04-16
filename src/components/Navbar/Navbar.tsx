import styled from "styled-components";
import { Menu } from "../Menu";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
  margin: 1.2rem;
  height: 4.3rem;
  max-width: 100%;
`;

const Logo = styled.img`
  margin: 0 auto;
  width: 3.3rem;
`;


function Navbar() {

  return ( 
    <FlexContainer>
      <div style={{width: "3.3rem"}}/>
      <Logo src="src\assets\logo.svg"/>
      <Menu />
    </FlexContainer>
  )
}
export default Navbar