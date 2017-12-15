import React from "react"
import { Alert, Row, Col } from "antd"
import { Link } from "react-router-dom"

const NotFoundPage = () => (
  <Row>
    <Col span={24}>
      <Alert
        message="Error"
        description={<p>404 PAGE NOT FOUND, go to <Link to="/">main page</Link> and try again. </p>}
        type="error"
        showIcon
      />

    </Col>
  </Row>
)

export default NotFoundPage
