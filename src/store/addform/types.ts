export interface AddFormState {
  key: string
  value: string
}

export const enum AddFormActionType {
  SET_KEY = 'ADDFORM/SET_KEY',
  SET_VALUE = 'ADDFORM/SET_VALUE'
}

export interface SetKeyAddFormAction {
  type: AddFormActionType.SET_KEY
  payload: string
}

export interface SetValueAddFormAction {
  type: AddFormActionType.SET_VALUE
  payload: string
}

export type AddFormAction = 
  | SetKeyAddFormAction
  | SetValueAddFormAction