import { Global, css } from '@emotion/react';

import { theme } from '../../theme';

export function GlobalStyle() {
  return (
    <>
      <link href="//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css" rel="stylesheet" type="text/css" />
      <Global styles={globalCss} />
    </>
  );
}

const globalCss = css`
  body {
    margin: 0;
    overflow-x: hidden;
    height: 100vh;
    color: #ffffff;

    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    font-size: 12px;
    box-sizing: border-box;
    word-break: keep-all;
    overflow-wrap: break-word;

    /* background-color: ${theme.colors.gray120}; */
  }

  button {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  canvas {
    display: block;
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;
  }

  input,
  select,
  textarea,
  button {
    font-family: inherit;
    color: inherit;
  }

  a,
  a:focus,
  a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
  }
`;
