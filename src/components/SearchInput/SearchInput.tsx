import styled from "styled-components"
import searchIcon from "@/assets/search_icon.svg";
import { COLORS } from "@/models";

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
    &:hover {
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

interface Props {
  placeholder: string;
}

function SearchInput({placeholder}: Props) {
  return (
    <SearchContainer>
      <span className="search-label">
        <img src={searchIcon} alt="find" className="search-icon" />
      </span>
      <input className="search-input" placeholder={placeholder} />
    </SearchContainer>
  )
}
export default SearchInput
