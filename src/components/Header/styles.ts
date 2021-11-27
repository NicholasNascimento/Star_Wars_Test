import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  background: var(--header);
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  padding: 2rem 1rem 4rem;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: var(--header);
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    width: 6rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;