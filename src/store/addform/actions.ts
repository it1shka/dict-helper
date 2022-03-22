import { AddFormActionType, SetKeyAddFormAction, SetValueAddFormAction } from "./types";

export function setCurKey(
  key: string
): SetKeyAddFormAction {
  return {
    type: AddFormActionType.SET_KEY,
    payload: key
  }
}

export function setCurValue(
  value: string
): SetValueAddFormAction {
  return {
    type: AddFormActionType.SET_VALUE,
    payload: value
  }
}