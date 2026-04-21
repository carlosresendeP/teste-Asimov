import styled from 'styled-components'

type CardVariant = 'light' | 'green' | 'dark'

const bgMap: Record<CardVariant, string> = {
  light: '#F3F3F3',
  green: '#B9FF66',
  dark: '#191A23',
}

const titleBgMap: Record<CardVariant, string> = {
  light: '#B9FF66',
  green: '#FFFFFF',
  dark: '#B9FF66',
}

const textMap: Record<CardVariant, string> = {
  light: '#191A23',
  green: '#191A23',
  dark: '#FFFFFF',
}

export const ServicesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 140px;
`

export const SectionHeader = styled.div`
  width: 100%;
  display: flex;
  height: 46px;
  align-items: center;
  gap: 40px;
`

export const ServicesBadge = styled.h2`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.sectionTitle};
  font-weight: 700;
  padding: 0 7px;
  border-radius: ${({ theme }) => theme.radius.sm};
  white-space: nowrap;
`

export const ServicesDescription = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.black};
  max-width: 580px;
  line-height: 28px;
`

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-top: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.div<{ $variant: CardVariant }>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  min-height: 310px;
  padding: 50px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.black};
  box-shadow: ${({ theme }) => theme.shadows.card};
  background-color: ${({ $variant }) => bgMap[$variant]};
  overflow: hidden;



  .left-side {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`

export const CardTitleWrapper = styled.div`
  max-width: 230px;
`

export const CardTitleBadge = styled.h3<{ $variant: CardVariant }>`
  display: inline;
  background-color: ${({ $variant }) => titleBgMap[$variant]};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.cardTitle};
  font-weight: 700;
  padding: 0px 7px;
  border-radius: ${({ theme }) => theme.radius.sm};
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;
`

export const CardIllustration = styled.img`
  position: absolute;
  right: 50px;
  top: 50%;
  transform: translateY(-50%);
  max-width: 200px;
  max-height: 210px;
  object-fit: contain;
`

export const LearnMore = styled.div<{ $variant: CardVariant }>`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  color: ${({ $variant }) => textMap[$variant]};
  font-size: ${({ theme }) => theme.fontSizes.body};
`

export const ArrowIcon = styled.img`
  width: 41px;
  height: 41px;
`
