import { Word } from "../app/types";

export interface TrainingState {
  words_left: Word[]
  count: number
  correct: number
}

export const enum TrainingActionType {
  SETUP = 'TRAINING/SETUP',
  NEXT = 'TRAINING/NEXT',
  FINISH = 'TRAINING/FINISH'
}

export interface TrainingSetupAction {
  type: TrainingActionType.SETUP
  payload: Word[]
}

export interface TrainingNextAction {
  type: TrainingActionType.NEXT
  payload: boolean // is correct
}

export interface TrainingFinishAction {
  type: TrainingActionType.FINISH
}

export type TrainingAction = 
  | TrainingSetupAction
  | TrainingNextAction
  | TrainingFinishAction