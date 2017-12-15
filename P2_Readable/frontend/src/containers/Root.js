import React from "react"
import { Provider } from "react-redux"
import { Route } from "react-router-dom"
import Main from "./Main"
import Post from "./Post"

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/:category?" exact component={Main} />
      <Route path="/:category/:post_id" exact component={Post} />
    </div>
  </Provider>
)

export default Root
