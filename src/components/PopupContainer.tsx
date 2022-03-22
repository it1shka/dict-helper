import styled from 'styled-components'
import type { FC } from 'react'

const PopupContainer: FC = ({ children }) => {
  return (
    <OuterContainer>
      <InnerContainer>
        { children }
      </InnerContainer>
    </OuterContainer>
  )
}

const OuterContainer = styled.div`
  position: fixed;
  z-index: 99;
  top: 0; bottom: 0;
  left: 0; right: 0;
  background-color: rgba(0,0,0,0.7);
`

const InnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 0.5em 1em;
  background-color: white;
  border-radius: 7px;
`

export default PopupContainer