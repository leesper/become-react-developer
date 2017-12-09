import React from "react"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import App from "./App"
import { PostDetail } from "../components"

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/:category?" exact component={App} />
      <Route path="/:category/:post_id" exact component={PostDetail} />
    </div>
  </Provider>
)

export default Root
