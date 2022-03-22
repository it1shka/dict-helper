import { AppAction, AppActionType, AppState } from "./types"

const defaultAppState: AppState = {
  dictionary: [],
  is_adding: false,
  is_training: false
}

const appReducer = (
  state = defaultAppState,
  action: AppAction
): AppState => {
  switch(action.type) {
    case AppActionType.ADD_WORD:
      return {
        ...state,
        dictionary: [
          ...state.dictionary, 
          action.payload
        ]
      }
    case AppActionType.REMOVE_WORD:
      return {
        ...state,
        dictionary: 
          state.dictionary.filter(({id}) => {
            return id !== action.payload
          })
      }
    case AppActionType.SET_ADDING:
      return {
        ...state,
        is_adding: action.payload
      }
    case AppActionType.SET_TRAINING:
      return {
        ...state,
        is_training: action.payload
      }
    case AppActionType.TOTAL_CLEAR:
      return {
        ...state,
        dictionary: []
      }
    default:
      return state
  }
}

export default appReducer