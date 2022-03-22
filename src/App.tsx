import styled from 'styled-components'
import AppContainer from "./components/AppContainer"
import AppBar from './components/AppBar'
import WordList from './components/WordLIst'
import AddButton from './components/AddButton'
import AddWordForm from './components/AddWordForm'
import { RootState } from './store'
import { useSelector } from 'react-redux'
import TrainingWidget from './components/TrainingWidget'

const App = () => {
  const {is_adding, is_training} = useSelector((state: RootState) => {
    return state.app
  })

  return (
    <>
    {is_adding && <AddWordForm />}
    {is_training && <TrainingWidget />}
    <AppContainer width={560} height={720}>
      <LayoutContainer>
        <AppBar />
        <WordList />
        <AddButton />
      </LayoutContainer>
    </AppContainer>
    </>
  )
}

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;

  width: 100%;
  height: 100%;

  border-radius: 7px;
  box-shadow: var(--shadow-color) 0px 0px 4px;
`

export default App