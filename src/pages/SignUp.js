import { useContext } from "react"
import { Form, Col, Row, Button, Modal } from "react-bootstrap"
import GamesContext from "../ulist/GameContext"

function SignUp() {
  const { signUp, signupshow, handleCloseSignup, handleOpenLogin } = useContext(GamesContext)
  return (
    <div className="ms-4 mt-4">
      <Modal show={signupshow} onHide={handleCloseSignup}>
        <Form
          className="mt-5"
          onSubmit={e => {
            signUp(e)
            handleCloseSignup()
            handleOpenLogin()
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title> SIGN UP </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                First Name
              </Form.Label>
              <Col md="6">
                <Form.Control type="text" name="firstName" required />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                Last Name
              </Form.Label>
              <Col md="6">
                <Form.Control type="text" name="lastName" required />
              </Col>
            </Form.Group>
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
            <Form.Group as={Row} className="mb-3">
              <Form.Label column md="2">
                Image
              </Form.Label>
              <Col md="6">
                <Form.Control type="url" name="photo" required />
              </Col>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit">
              SIGNUP
            </Button>
            <Button onClick={handleCloseSignup} variant="secondary">
              close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  )
}

export default SignUp
