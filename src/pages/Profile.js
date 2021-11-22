import { useContext } from "react"
import GamesContext from "../ulist/GameContext"
import { Col, Container, Image, Row } from "react-bootstrap"
import UsersCardGames from "../components/UsersCardGames"

function Profile() {
  const { profile, games } = useContext(GamesContext)
  if (!profile) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      <Row className="d-flex align-items-center mb-5">
        <Col>
          <Image src={profile.photo} height="250px" />
        </Col>
        <Col>
          <h2 className="mb-2">
            {profile.firstName} {profile.lastName}
          </h2>
          <p className="text-muted">{profile.email}</p>
        </Col>
      </Row>
      <Row md={4} sm={2} xs={1}></Row>
 
      <Row>
        {profile.items.map(usergame => {
          if(game._id === editId) {
           return<EditGames games={games} />
          }
          return <UsersCardGames inProfile={true} usergame={usergame} /* editGames={editGames} deleteGames={deleteGames} */ />
        })}
      </Row> 
    </Container>
  )
}

export default Profile
