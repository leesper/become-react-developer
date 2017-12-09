import React from "react"
import { Button } from "antd"

const Voter = ({ text, onLike, onDislike }) => (
  <span>
    <Button icon="like" style={{ marginRight: 8 }} onClick={onLike} />
    <span style={{ marginRight: 8}}>{text}</span>
    <Button icon="dislike" onClick={onDislike} />
  </span>
)

export default Voter
