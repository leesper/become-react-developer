import React from "react"
import { Button } from "antd"

const Voter = ({ text, onLike, onDislike }) => (
  <span>
    <Button icon="like" style={{ marginLeft: 8 }} onClick={onLike} />
    <span style={{ marginLeft: 8}}>{text}</span>
    <Button style={{ marginLeft: 8}} icon="dislike" onClick={onDislike} />
  </span>
)

export default Voter
