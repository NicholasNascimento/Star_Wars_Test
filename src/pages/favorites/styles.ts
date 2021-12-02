import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  text-align: center;

  ul {
    margin-left: auto;
    margin-right: auto;
    width: 15%;
    padding: 2rem 0 0.5rem 0;
    border-bottom: 1px solid var(--yellow);
  }

  strong {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: 1rem;

  p {
    font-size: 20px;
    padding: 1rem 0;
    color: white;
  }
`;