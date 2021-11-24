import { useContext } from "react"
import { Form, Col, Row, Button, Modal, } from "react-bootstrap"
import GamesContext from "../utils/GameContext"

function Login() {
  const { login, loginshow, handleCloseLogin } = useContext(GamesContext)
  return (
    <div className="ms-4 mt-4">
    <Modal show={loginshow} onHide={handleCloseLogin}>
      <Form className="mt-5" onSubmit={e => {
        login(e)
        handleCloseLogin()
        
        }}>
        <Modal.Header closeButton>
          <Modal.Title> LOGIN </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Email
            </Form.Label>
            <Col md="6">
              <Form.Control type="email" name="email" required />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column md="2">
              Password
            </Form.Label>
            <Col md="6">
              <Form.Control type="password" name="password" required />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit">
            LOGIN
          </Button>
          <Button onClick={handleCloseLogin} variant="secondary">
            CLOSE
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  </div>
  )
}

export default Login
