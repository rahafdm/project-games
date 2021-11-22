import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import UsersCardGames from "../components/UsersCardGames"
import GamesContext from "../ulist/GameContext"

function UsersGames() {
  const { games } = useContext(GamesContext)
  console.log(games)
  return (
    <>
      <h2> Users Games </h2>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4 mt-4">
          {games.map(usergame => (
            <UsersCardGames usergame={usergame} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default UsersGames
