import React from "react"
import { createStore, applyMiddleware } from "redux"
import { render } from "react-dom"
import App from "./containers/App"
import { Provider } from "react-redux"
import { BrowserRouter, Route} from "react-router-dom"
import reducer from "./reducers"
import MainList from "./components/MainList"
import thunk  from "redux-thunk"
import 'antd/dist/antd.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
)
