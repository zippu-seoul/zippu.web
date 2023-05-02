import React from 'react';
import { Global, css } from '@emotion/react';

const style = css`
  html {
    font-size: 16px;
    box-sizing: border-box;
    outline: none;
    overflow-wrap: break-word;
  }

  body {
    margin: 0px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  select,
  input,
  button,
  textarea {
    border: 0;
    outline: 0 !important;
  }
  input[type='checkbox'] {
    width: 18px; /*Desired width*/
    height: 18px; /*Desired height*/
    margin: 4px 12px 4px 4px;
    cursor: pointer;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input {
    padding: 0px;
    margin: 0px;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    font-family: NanumSquare_acR;
    font-size: 30px;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
