import styled from 'styled-components'
import { Button } from '../UI/Button/Button'

export const NavWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
`

export const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  width: 219.54px;
  height: 56px;

`

export const NavLinks = styled.nav`
  display: flex;
  max-width: 811px;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 1245px) {
    display: none;
  }
`

export const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-family: 'Space Grotesk', sans-serif;

  &:hover {
    text-decoration: underline;
  }
`

export const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;

  @media (max-width: 1245px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: 1245px) {
    display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 24px 0;
    border-top: 1px solid ${({ theme }) => theme.colors.black};
    margin-top: 16px;
  }
`

export const QuoteButton = styled(Button)`
  background: transparent;
  height: 68px;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 14px;
  padding: 20px 35px;
  font-size: 20px;
  white-space: nowrap;
  font-family: 'Space Grotesk', sans-serif;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 1245px) {
    display: none;
  }
`
