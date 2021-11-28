import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  margin-left: 45%;
  text-align: center;

  button {
    width: 14rem;
    height: 4rem;
    font-size: 1rem;
    background: var(--background);
    border:0;
    border-bottom: 1px solid var(--yellow);
    

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;