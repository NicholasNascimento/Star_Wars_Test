import styled from "styled-components";

export const Container = styled.div`
  display: block;
  text-align: center;
    
  p {
    font-size: 20px;
    padding: 1rem 0;
    color: white;
  }

  button {
    width: 6rem;
    height: 3rem;
    color: white;
    background: var(--background);
    border:0;
    border-top: 1px solid var(--yellow);
    

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const Content = styled.div`
  border-top-right-radius: 40%;
  border-bottom-right-radius: 40%;
`;