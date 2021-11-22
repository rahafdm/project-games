import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import DevolberCard from "../components/DevolberCardGame"
import GamesContext from "../ulist/GameContext"

function Home() {
  const { games1 } = useContext(GamesContext)


  return (
    <>
      <h2 style={{ color: "red", textAlign: "center" }}> Devolbers Games </h2>
      <Container className="m-10">
        <Row xs={1} sm={2} md={3} className="g-4 mt-4">
          {games1.map(game => (
            <DevolberCard games1={games1} game={game} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
