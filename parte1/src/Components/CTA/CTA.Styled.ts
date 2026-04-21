import styled from 'styled-components'
import { Button } from '../UI/Button/Button'

export const CTASection = styled.section`
  padding: 110px 0;
  background-color: ${({ theme }) => theme.colors.white};


  .container {
    position: relative;
  }
`

export const CTACard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1240px;
  min-height: 347px;
  padding: 0 60px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.grayLight};
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;


  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`

export const CTAContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 26px;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 40px 30px;
  }
`

export const CTATitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.2;
`

export const CTADescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  line-height: 1.5;
`

export const CTAButton = styled(Button)`
  padding: 20px 35px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: ${({ theme }) => theme.fontSizes.body};
  height: 68px;
  width: fit-content;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 16px;
    height: auto;
  }
`

export const CTAIllustration = styled.img`
  width: 359px;
  flex-shrink: 0;
  align-self: flex-end;
  z-index: 3;
  position: absolute;
  right: 15%;
  bottom: -5%;

  @media (max-width: 768px) {
    display: none;
    position: static;
  }
`
