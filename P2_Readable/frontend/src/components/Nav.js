import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => (
  props.categories.map((category) => (
    <Link
      key={category.path}
      style={{ marginLeft: 60 }}
      to={category.path === "/" ? category.path : `/${category.path}`}
      onClick={
        () => {
          props.changeCategory(category)
          props.loadPosts(category.path)
        }
      }
      >{category.name}</Link>
    ))
)

export default Nav
