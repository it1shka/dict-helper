import type { ChangeEvent, FormEvent } from 'react'
import styled from 'styled-components'
import PopupContainer from './PopupContainer'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../store'
import { setCurKey, setCurValue } from '../store/addform/actions'
import { addWord, setAdding } from '../store/app/actions'
import { Word } from '../store/app/types'

const AddWordForm = () => {
  const dispatch = useDispatch<RootDispatch>()
  const { key, value } = useSelector((state: RootState) => {
    return state.addForm
  })

  const handleKeyChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setCurKey(value))
  }

  const handleValueChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    dispatch(setCurValue(value))
  }

  const handleFormSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()
    const newWord: Word = {
      id: Date.now(),
      key, value
    }
    dispatch(addWord(newWord))
    dispatch(setCurKey(''))
    dispatch(setCurValue(''))
    dispatch(setAdding(false))
  }

  const handleFormClose = () => {
    dispatch(setAdding(false))
  }

  return (
    <PopupContainer>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledInput 
          required
          placeholder='Key: '
          value={key}
          onChange={handleKeyChange}
        />
        <StyledInput 
          required
          placeholder='Value: ' 
          value={value}
          onChange={handleValueChange}
        />
        <Buttons>
          <StyledButton type='submit'>
            Add
          </StyledButton>
          <StyledButton onClick={handleFormClose}>
            Close
          </StyledButton>
        </Buttons>
      </StyledForm>    
    </PopupContainer>
  )
}

const StyledForm = styled.form`
  width: 340px;
  height: 140px;
  display: flex;
  flex-direction: column;
`

const Buttons = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StyledInput = styled.input`
  font-size: inherit;
  margin: 0.25em 0;
  padding: 0.2em;
` 

const StyledButton = styled.button`
  font-size: 0.95em;
  padding: 0.2em 0.5em;
  border: none;
  border-radius: 7px;
  border: 1px solid #ccc;
  &:hover {
    background-color: #ccc;
  }
`

export default AddWordForm