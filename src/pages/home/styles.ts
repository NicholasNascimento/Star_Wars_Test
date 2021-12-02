import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 10rem 2rem;

  form {
    animation-name: star;
    animation-duration: 1.5s;
  }

  @keyframes star {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

  button {
    margin-top: 1rem;
    font-size: 1rem;
    color: #FFF;
    background: var(--header);
    border: 1px solid var(--white);
    border-radius: 0.5rem;
    height: 3rem;
    width: 6rem;

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.6);
    }
  }

  select {
    height: 3rem;
    width: 8rem;
    border: 1px solid var(--white);
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    background: var(--header);
    font-weight: 600;
    color: var(--white);
    
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.7);
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
    margin-left: 1rem;

    ::placeholder {
      color: var(--background);
      font-weight: 600;
      padding: 0 0.5rem;
    }

    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;