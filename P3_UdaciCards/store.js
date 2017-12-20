import { persistStore, persistReducer } from "redux-persist"
import { AsyncStorage } from "react-native"
import { createStore } from "redux"
import reducer from "./reducers"

const config = {
  key: "UdaciCards",
  storage: AsyncStorage
}

const reducers = persistReducer(config, reducer)

const configureStore = () => {
  const store = createStore(reducers)
  const persistor = persistStore(store)
  return { persistor, store }
}

export default configureStore
