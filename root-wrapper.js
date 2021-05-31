import React from "react"
import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "@material-ui/core/styles"
import { createMuiTheme } from "@material-ui/core"
//provider

const GlobalStyle = createGlobalStyle`
/*
=============== 
Variables
===============
*/

:root {
    /* primary/main color */
    --clr-primary:#a1806a;
    --clr-secondary: #546e7a;
    --clr-third: #221E20;
    --clr-fourth: #ffffff;
    --clr-background: #f8f8f8;
    --clr-gradient:linear-gradient(
      129deg,
      rgba(84, 110, 122, 1) 0%,
      rgba(161, 128, 106, 1) 50%,
      rgba(255, 251, 51, 1) 100%
    );

    /* darkest grey - used for headings */
    --clr-grey-1: hsl(209, 61%, 16%);
    --clr-grey-2: hsl(211, 39%, 23%);
    --clr-grey-3: hsl(209, 34%, 30%);
    --clr-grey-4: hsl(209, 28%, 39%);
    /* grey used for paragraphs */
    --clr-grey-5: hsl(210, 22%, 49%);
    --clr-grey-6: hsl(209, 23%, 60%);
    --clr-grey-7: hsl(211, 27%, 70%);
    --clr-grey-8: hsl(210, 31%, 80%);
    --clr-grey-9: hsl(212, 33%, 89%);
    --clr-grey-10: #f1f5f8;
    --clr-white: #fff;
    --clr-red-dark: hsl(360, 67%, 44%);
    --clr-red-light: hsl(360, 71%, 66%);
    --clr-green-dark: hsl(125, 67%, 44%);
    --clr-green-light: hsl(125, 71%, 66%);
    --clr-black: #222;
    --transition: all 0.3s linear;
    --spacing: 0.1rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 620px;
    --media-sm: 576px;
    --media-md: 768px;
    --media-lg: 992px;
    --media-xl: 1200px;
  }
  /*
  =============== 
  Global Styles
  ===============
  */
  
  *,
  ::after,
  ::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: var(--clr-fourth);
    color: var(--clr-grey-1);
    line-height: 1.5;
    font-size: 0.875rem;
  }
  ul {
    list-style-type: none;
  }
  a {
    text-decoration: none;
    text-shadow:none;
    background-image: none;
    color: inherit;
  }
  img {
    
    display: block;
  }
  
  
  /*  global classes */
  
  .btn {
    text-transform: uppercase;
  
    color: var(--clr-primary);
    padding: 0.375rem 0.75rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 400;
    transition: var(--transition);
    font-size: 0.875rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
  }
`

const theme = createMuiTheme({
  palette: { primary: { main: "#a1806a" } },
})

export const wrapRootElement = ({ element }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </React.Fragment>
  )
}
