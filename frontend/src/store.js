import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'
import loginReducer from './reducers/loginReducer'
import cartReducer from './reducers/cartReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  users: userReducer,
  login: loginReducer,
  cart: cartReducer,
  notification: notificationReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store