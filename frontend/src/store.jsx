import thunk from 'redux-thunk'
import { combineReducers, applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import userReducer from './reducers/userReducer'
import productReducer from './reducers/productReducer'
import loginReducer from './reducers/loginReducer'
import cartReducer from './reducers/cartReducer'
import courseReducer from './reducers/courseReducer'
import notificationReducer from './reducers/notificationReducer'

const reducer = combineReducers({
  users: userReducer,
  products: productReducer,
  courses: courseReducer,
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