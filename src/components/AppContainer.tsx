import type { FC } from 'react'
import styled from 'styled-components'

type AppContainerProps = Partial<{
  width: number
  height: number
}>

const AppContainer: FC<AppContainerProps> = ({width, height, children }) => {
  return (
    <OuterContainer width={width}>
      <InnerContainer height={height}>
        { children }
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.div<{width?: number}>`
  max-width: ${({width}) => width ?? 1920}px;
  margin: 0em auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`

const InnerContainer = styled.div<{height?: number}>`
  max-height: ${({height}) => height ?? 1080}px;
  height: 100%;
`

export default AppContainer