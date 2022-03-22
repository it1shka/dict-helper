import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../store'
import { setTraining, totalClear } from '../store/app/actions'
import { setupTraining } from '../store/training/actions'

const AppBar = () => {
  const dispatch = useDispatch<RootDispatch>()
  const words = useSelector((state: RootState) => {
    return state.app.dictionary
  })

  const handleStartTraining = () => {
    if(words.length < 3) {
      alert('Too little words!')
      return
    }
    const shuffled = [...words].sort(() => 0.5 - Math.random())
    dispatch(setupTraining(shuffled))
    dispatch(setTraining(true))
  }

  const handleClear = () => {
    dispatch(totalClear())
  }

  return (
    <AppBarContainer>
      <h2>Dictionary trainer</h2>
      <Buttons>
        <FancyButton onClick={handleStartTraining}>
          Train
        </FancyButton>
        <FancyButton onClick={handleClear}>
          Clear
        </FancyButton>
      </Buttons>
    </AppBarContainer>
  )
}

const Buttons = styled.div`
  height: 100%;
  margin-left: auto;
  & > * + * {
    margin-left: 0.5em;
  }
`

const FancyButton = styled.button`
  height: 100%;
  font-size: inherit;
  border: none;
  padding: 0 0.75em;
  background-color: white;
  border-radius: 7px;
  color: var(--primary-dark-color);
  
  transition: 0.2s all 0s;
  &:hover {
    background-color: var(--primary-dark-color);
    color: white;
  }
`

const AppBarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0.5em 1em;
  background-color: var(--primary-color);
  border-radius: 7px 7px 0 0;
  color: white;
  box-shadow: var(--primary-dark-color) 0px 2px 4px;
`

export default AppBar