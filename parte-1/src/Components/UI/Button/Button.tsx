import styled from "styled-components";

const ButtonStyled = styled.button`
    height: 100%;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-family: 'Space Grotesk', sans-serif;
    cursor: pointer;
    transition: opacity 0.2s;
    text-align: center;

    &:hover {
        opacity: 0.85;
    }
`


export const Button = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <ButtonStyled className={className}>{children}</ButtonStyled>
    )
}