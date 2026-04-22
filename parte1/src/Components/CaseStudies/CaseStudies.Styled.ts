import styled from 'styled-components'

export const CaseStudiesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
 padding-bottom: 20px;
`

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  height: 46px;
  align-items: center;
  gap: 40px;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    align-items: center;
    text-align: center;
  }
`

export const Badge = styled.h2`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.sectionTitle};
  font-weight: 700;
  padding: 0 7px;
  border-radius: ${({ theme }) => theme.radius.sm};
  white-space: nowrap;
`

export const Description = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  max-width: 580px;


  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    width: 100%;
  }
`

export const CasesBlock = styled.div`
  display: flex;
  max-width: 1234px;
  min-height: 326px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: 70px 60px;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:64px;

  @media (max-width: 995px) {
    flex-direction: column;
    height: auto;
  }
`

export const CaseItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  width: 286px;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }
`

export const Divider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  align-self: stretch;
  flex-shrink: 0;
`

export const CaseText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
`

export const LearnMoreLink = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${({ theme }) => theme.colors.green};
  font-size: ${({ theme }) => theme.fontSizes.body};
  text-decoration: none;
  cursor: pointer;
`

export const ArrowIcon = styled.img`
  width: 24px;
  height: 24px;
`
