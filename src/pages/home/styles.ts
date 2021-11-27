import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 10rem 2rem;

  button {
    margin-top: 1rem;
    font-size: 1rem;
    color: #FFF;
    background: var(--header);
    border: 0;
    border-radius: 0.5rem;
    height: 3rem;
    width: 6rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Content = styled.div`
  text-align: center;

  input {
      width: 40%;
      height: 3rem;
      border-radius: 0.7rem;
      margin-top: 2rem;
  }
`;