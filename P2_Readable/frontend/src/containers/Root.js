import React from "react"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import App from "./MainApp"
import Post from "./Post"

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/:category?" exact component={App} />
      <Route path="/:category/:post_id" exact component={Post} />
    </div>
  </Provider>
)

export default Root
