import styled from 'styled-components';
import { shade } from 'polished';

// Template literals

export const Title = styled.h1`
  font-size: 3rem;
  color: #3a3a3a;
  margin-top: 5rem;
  max-width: 28.62rem;
  line-height: 3.5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 43.75rem;
  display: flex;
  input {
    flex: 1;
    height: 4.375rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.313rem 0 0 0.313rem;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 13.125rem;
    height: 4.375rem;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.3, '#04d361')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 0.313rem;
    padding: 1.5rem;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    & + a {
      margin-top: 1rem;
    }

    &:hover {
      transform: translateX(0.8rem);
    }

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }
    div {
      margin-left: 1rem;
      flex: 1;
      strong {
        font-size: 1.25rem;
        color: #3d3d4d;
      }
      p {
        font-size: 1.125rem;
        color: #a8a8b3;
        margin-top: 0.25rem;
      }
    }
    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
