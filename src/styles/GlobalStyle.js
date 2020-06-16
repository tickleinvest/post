import { normalize } from 'polished'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  @import url(//fonts.googleapis.com/css?family=Monoton|Nanum+Gothic&display=swap);

  ${normalize()}

  body {
    color: #000;
    font-weight: 300;
    font-size: 17px;
    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;
    line-height: 1.5;
    word-break: keep-all;

    background-color: white;
  }

  a {
    color: #333;
    text-decoration: none;
  }

  h3 {
    font-family: 'Spoqa Han Sans', 'Nanum Gothic', sans-serif;
  }
`

export default GlobalStyle
