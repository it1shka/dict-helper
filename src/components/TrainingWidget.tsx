import { ChangeEvent, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { RootDispatch, RootState } from "../store"
import { setTraining } from "../store/app/actions"
import { finishTraining, nextWord } from "../store/training/actions"
import PopupContainer from "./PopupContainer"

const clear = (str: string) => {
  return str
    .toLowerCase()
    .split('')
    .filter(l => /[^\s]/.test(l))
    .join()
}

const TrainingWidget = () => {
  const dispatch = useDispatch<RootDispatch>()
  const [answer, setAnswer] = useState('')
  const {words_left, correct, count} = useSelector((state: RootState) => {
    return state.training 
  })
  const current_word = words_left[0]

  const validate = () => {
    const right = current_word.value
    return clear(right) === clear(answer)
  }

  const handleAnswerChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value
    setAnswer(value)
  }

  const handleNext = () => {
    dispatch(nextWord(validate()))
    setAnswer('')
  }

  const handleFinish = () => {
    dispatch(finishTraining())
  }

  const handleClose = () => {
    dispatch(setTraining(false))
  }

  if(words_left.length === 0) {
    return (
      <PopupContainer>
        <Wrapper>
          <h1>Congrats!</h1>
          <h3>{count - correct} mistakes, {correct} correct</h3>
          <Buttons>
            <FancyButton onClick={handleClose}>
              OK
            </FancyButton>
          </Buttons>
        </Wrapper>
      </PopupContainer>
    )
  }

  return (
    <PopupContainer>
      <Wrapper>
        <h1>{current_word.key}</h1>
        <InputField
          placeholder='Your answer...' 
          value={answer}
          onChange={handleAnswerChange}
        />
        <span>
          {count - correct} mistakes, {correct} correct
        </span>
        <Buttons>
          <FancyButton onClick={handleNext}>
            Next
          </FancyButton>
          <FancyButton onClick={handleFinish}>
            Finish
          </FancyButton>
        </Buttons>
      </Wrapper>
    </PopupContainer>
  )
}

const FancyButton = styled.button`
  border: none;
  font-size: 1.3em;
  padding: 0.5em 1em;
  border-radius: 30px;
  transition: 0.3s all 0s;
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`

const Buttons = styled.div`
  width: 100%;
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  padding-bottom: 1em;
`

const InputField = styled.input`
  box-shadow: var(--shadow-color) 0px 0px 4px;
  border: 1px solid #eee;
  outline: none;
  font-size: 1.1em;
  padding: 0.5em 1em;
  margin: 0.5em 1em;
  border-radius: 30px;
`

const Wrapper = styled.div`
  width: 340px;
  height: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em 1em;
`

export default TrainingWidget