export type WordId = number

export type Word = {
  id: WordId
  key: string 
  value: string 
}

export interface AppState {
  dictionary: Word[]
  is_training: boolean
  is_adding: boolean
}

export const enum AppActionType {
  ADD_WORD = 'APP/ADD_WORD',
  REMOVE_WORD = 'APP/REMOVE_WORD',
  TOTAL_CLEAR = 'APP/TOTAL_CLEAR',
  SET_TRAINING = 'APP/SET_TRAINING',
  SET_ADDING = 'APP/SET_ADDING'
}

export interface AddWordAction {
  type: AppActionType.ADD_WORD
  payload: Word
}

export interface RemoveWordAction {
  type: AppActionType.REMOVE_WORD
  payload: WordId
}

export interface SetTrainingAction {
  type: AppActionType.SET_TRAINING
  payload: boolean
}

export interface SetAddingAction {
  type: AppActionType.SET_ADDING
  payload: boolean
}

export interface TotalClearAction {
  type: AppActionType.TOTAL_CLEAR
}

export type AppAction = 
  | AddWordAction
  | RemoveWordAction
  | SetTrainingAction
  | SetAddingAction
  | TotalClearAction