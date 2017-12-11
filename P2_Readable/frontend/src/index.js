import React from "react"
import { createStore, applyMiddleware } from "redux"
import { render } from "react-dom"
import { Root } from "./containers"
import { BrowserRouter } from "react-router-dom"
import reducer from "./reducers"
import thunk  from "redux-thunk"
import 'antd/dist/antd.css';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

render(
  <BrowserRouter>
    <Root store={store} />
  </BrowserRouter>,
  document.getElementById("root")
)
