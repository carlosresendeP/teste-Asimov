import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #f5f5f5;
        font-family: 'Space Grotesk', sans-serif;
    }

    .container {
        max-width: 1440px;
        margin: 0 auto;
        padding: 0 100px;
        
        @media screen and (max-width: 768px) {
            padding: 0 25px;
        }
    }
`;