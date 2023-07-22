import styled from "styled-components"
import searchIcon from "@/assets/search_icon.svg";
import { COLORS } from "@/models";
import { useState } from "react";
import { useNavbarContext } from "@/context";

const SearchContainer = styled.form`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  
  & .search-label {
    position: absolute;
    top: 6.5px;
    left: 4px;
  }

  & .search-input {
    width: 100%;
    padding: 10px 30px;
    background-color: ${COLORS.PRIMARY_COLOR};
    caret-color: ${COLORS.SECONDARY_COLOR_ALPHA};
    font-size: 12px;
    font-family: inherit;
    box-sizing: inherit;
    border-radius: 10px;
    border: 1px solid transparent;
    outline: 0;
    transition: border 0.4s ease;
    &:hover, &:focus {
      border: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
    }
  }
  @media (min-width: 768px) {
    & {
      max-width: 400px;
    }
    & .search-input {
      border-bottom: 1px solid ${COLORS.SECONDARY_COLOR_ALPHA};
    }
  }
`;

function SearchInput({handleSubmit}: {handleSubmit: (text: string) => void}) {
  const [inputText, setInputText] = useState("");
  const [placeholder, setPlaceholder] = useState("search");

  const navbarContext = useNavbarContext();

  const submitInfo = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(inputText);
    setPlaceholder(inputText);
    setInputText("");
    navbarContext.setContextValue(false);
  }

  return (
    <SearchContainer onSubmit={(e) => submitInfo(e)}>
      <span className="search-label">
        <img src={searchIcon} alt="find" className="search-icon" />
      </span>
      <input className="search-input" placeholder={placeholder} value={inputText} onChange={(e) => setInputText(e.target.value)} />
    </SearchContainer>
  )
}
export default SearchInput
