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
