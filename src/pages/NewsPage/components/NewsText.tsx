import styled from "styled-components";

export const Title = styled.div`
  position: absolute;
  height: 4rem;
  width: 100%;
  padding: 1rem;
  background-image: linear-gradient( rgba(0,0,0, 0.8), rgba(0,0,0,0.4), transparent );
  color: #fff;
  text-align: right;
  border-radius: inherit;
`;

export const Details = styled.div`
  position: absolute;
  bottom: 0;
  height: 4rem;
  width: 100%;
  padding: 1rem;
  background-image: linear-gradient( to top, rgba(0,0,0, 0.8), rgba(0,0,0,0.4), transparent );
  color: #fff;
  text-align: right;
  border-radius: inherit;
`;
