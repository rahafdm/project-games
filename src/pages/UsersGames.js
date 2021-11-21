import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import UsersCardGames from "../components/UsersCardGames"
import GamesContext from "../ulist/GameContext"

function UsersGames() {
  const { usergames } = useContext(GamesContext)
  return (
    <>
      <h2> Devolbers Games </h2>
      <Container>
        <Row xs={1} sm={2} md={4} className="g-4 mt-4">
          {usergames.map(usergame => (
            <UsersCardGames usergame={usergame} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default UsersGames
