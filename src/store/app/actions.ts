import { AddWordAction, AppActionType, RemoveWordAction, SetAddingAction, SetTrainingAction, TotalClearAction, Word, WordId } from "./types";

export function addWord(
  word: Word
): AddWordAction {
  return {
    type: AppActionType.ADD_WORD,
    payload: word
  }
}

export function removeWord(
  id: WordId
): RemoveWordAction {
  return {
    type: AppActionType.REMOVE_WORD,
    payload: id
  }
}

export function setTraining(
  is_training: boolean
): SetTrainingAction {
  return {
    type: AppActionType.SET_TRAINING,
    payload: is_training
  }
}

export function setAdding(
  is_adding: boolean
): SetAddingAction {
  return {
    type: AppActionType.SET_ADDING,
    payload: is_adding
  }
}

export function totalClear(): TotalClearAction {
  return {
    type: AppActionType.TOTAL_CLEAR
  }
}