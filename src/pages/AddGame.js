import { useContext } from "react"
import { Form, Button, Col, Row } from "react-bootstrap"
import GamesContext from "../ulist/GameContext"

function AddGame() {
  const { addGames } = useContext(GamesContext)
  return (
    <div className="ms-5">
      <h1> ADD GAME </h1>
      <Form className="mt-5" onSubmit={addGames}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="4">
            TITLE
          </Form.Label>

          <Col md="6">
            <Form.Control type="text" name="title" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="4">
            DISCRIPTION
          </Form.Label>

          <Col md="6">
            <Form.Control type="text" name="description" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="4">
            IMAGE
          </Form.Label>

          <Col md="6">
            <Form.Control type="URL" name="image" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column md="4">
            GAME LINK
          </Form.Label>

          <Col md="6">
            <Form.Control type="url" name="url" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="my-5">
          <Col md={{ span: 10, offset: 2 }}>
            <Button variant="primary" type="submit">
              ADD GAME
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddGame
