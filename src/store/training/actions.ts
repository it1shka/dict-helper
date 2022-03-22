import { Word } from "../app/types";
import { TrainingActionType, TrainingFinishAction, TrainingNextAction, TrainingSetupAction } from "./types";

export function setupTraining(
  words: Word[]
): TrainingSetupAction {
  return {
    type: TrainingActionType.SETUP,
    payload: words
  }
}

export function nextWord(
  isCorrect: boolean
): TrainingNextAction {
  return {
    type: TrainingActionType.NEXT,
    payload: isCorrect
  }
}

export function finishTraining(): TrainingFinishAction {
  return {
    type: TrainingActionType.FINISH
  }
}