import { TrainingState, TrainingAction, TrainingActionType } from "./types";

const defaultTrainingState: TrainingState = {
  words_left: [],
  correct: 0,
  count: 0
}

const trainingReducer = (
  state = defaultTrainingState,
  action: TrainingAction
): TrainingState => {
  switch(action.type) {
    case TrainingActionType.SETUP:
      return {
        words_left: action.payload,
        correct: 0,
        count: 0
      }
    case TrainingActionType.NEXT:
      return {
        words_left: state.words_left.slice(1),
        correct: state.correct + Number(action.payload),
        count: state.count + 1
      }
    case TrainingActionType.FINISH:
      return {
        ...state,
        words_left: []
      }
    default:
      return state
  }
}

export default trainingReducer