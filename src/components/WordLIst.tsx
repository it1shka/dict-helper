import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { RootDispatch, RootState } from '../store'
import { Word } from '../store/app/types'
import { removeWord } from '../store/app/actions'

const WordList = () => {
  const words = useSelector((state: RootState) => {
    return state.app.dictionary
  })

  return (
    <StyledList>
      {words.length === 0 && (
        <li>
          <Mock>No items.</Mock>
        </li>
      )}
      {words.map((word, idx) => {
        return (
          <WordElement 
            key={idx}
            word={word}
          />
        )
      })}
    </StyledList>
  )
}

const Mock = styled.h2`
  color: grey;
  text-align: center;
`

const StyledList = styled.ul`
  padding: 1em 0.5em;
  & > * + * {
    margin-top: 0.5em;
  }

  overflow-y: auto;
`

const WordElement = ({word}: {word: Word}) => {
  const dispatch = useDispatch<RootDispatch>()
  const handleRemove = () => {
    if(!window.confirm(`Delete "${word.key}"?`)) {
      return
    }
    dispatch(removeWord(word.id))
  }
  const isTraining = useSelector((state: RootState) => {
    return state.app.is_training
  })

  return (
    <WordContainer onClick={handleRemove}>
      <p>{word.key}</p>
      <p>{isTraining ? '*'.repeat(word.value.length) : word.value}</p>
    </WordContainer>
  )
}

const WordContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5em 0.75em;
  background-color: #eee;
  border-radius: 7px;
  border: 1px solid #ccc;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`

export default WordList