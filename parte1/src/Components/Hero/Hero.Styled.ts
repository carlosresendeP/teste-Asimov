import styled from 'styled-components'
import { Button } from '../UI/Button/Button'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  
` 
export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 70px;

`

export const HeroGrid = styled.div`
  width: 100%;
  height: 515px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    max-width: 100%;
    max-height: 100%;
    height: auto;
  }
`

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 531px;
  height: 100%;
  max-height: 481px;
  gap: 35px;

  @media (max-width: 768px) {
    max-width: 100%;
    max-height: none;
    align-items: center;
    text-align: center;
  }
`

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.hero};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.2;
  letter-spacing: -0.5px;
`

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.black};
  line-height: 28px;
  max-width: 480px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

export const BookButton = styled(Button)`
  align-self: flex-start;
  width: 100%;
  max-width: 264px;
  height: 100%;
  max-height: 68px;
  padding: 20px 35px;
  font-size: 20px;
  font-family: 'Space Grotesk', sans-serif;
  cursor: pointer;
  transition: opacity 0.2s;
  border-radius: 14px;

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 768px) {
    align-self: center;
    max-width: 100%;
  }
`

export const IllustrationCol = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 600px;
  width: 100%;
  max-height: 515px;

  img {
    width: 100%;
    max-width: 540px;
    min-width: 300px;
    height: 100%;
    max-height: 515px;
    min-height: 300px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: center;
  }
`

export const LogosStrip = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    height: auto;
    gap: 24px;
  }
`

export const LogoItem = styled.img`
  width: 125.24px;
  object-fit: contain;
  filter: grayscale(100%);

  @media (max-width: 768px) {
    width: 80px;
  }
`
