import { createStore, combineReducers } from 'redux'
import appReducer from './app/reducer'
import addFormReducer from './addform/reducer'
import trainingReducer from './training/reducer'

const rootReducer = combineReducers({
  app: appReducer,
  addForm: addFormReducer,
  training: trainingReducer
})

const store = createStore(rootReducer)

export default store
export type RootDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>