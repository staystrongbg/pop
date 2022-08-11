import { css } from 'styled-components';

export const mobile = (props) => {
  return css`
    @media (max-width: 960px) {
      ${props}
    }
  `;
};

export const mt = (props) => {
  return css`
    @media (max-width: 1260px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media (max-width: 1540px) {
      ${props}
    }
  `;
};
