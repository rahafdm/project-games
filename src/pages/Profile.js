import { useContext } from "react"
import GamesContext from "../ulist/GameContext"
import { Col, Container, Image, Row } from "react-bootstrap"

function Profile() {
  const { profile } = useContext(GamesContext)

  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.image} height="250px" />
        </Col>
        <Col>
          <h2 className="mb-2">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-muted">{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}></Row>
    </Container>
  )
}

export default Profile
