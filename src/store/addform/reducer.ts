import { AddFormState, AddFormAction, AddFormActionType } from "./types";

const defaultAddFormState: AddFormState = {
  key: '',
  value: ''
}

const addFormReducer = (
  state = defaultAddFormState,
  action: AddFormAction
): AddFormState => {
  switch(action.type) {
    case AddFormActionType.SET_KEY:
      return {
        ...state,
        key: action.payload
      }
    case AddFormActionType.SET_VALUE:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}

export default addFormReducer