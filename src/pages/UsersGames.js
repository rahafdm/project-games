import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import UsersCardGames from "../components/UsersCardGames"
import GamesContext from "../utils/GameContext"

function UsersGames() {
  const { games } = useContext(GamesContext)
  console.log(games)
  return (
    <>
      <h2 style={{textAlign:"center", color:"burlywood"}}> Users Games </h2>
      <Container>
      <Row xs={1} sm={2} md={3} className="g-4 mt-4">
          {games.map(usergame => (
            <UsersCardGames usergame={usergame} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default UsersGames
