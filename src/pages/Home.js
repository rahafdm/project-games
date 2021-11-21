import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import DevolberCard from "../components/DevolberCardGame"
import GamesContext from "../ulist/GameContext"

function Home() {
  const { games } = useContext(GamesContext)
  const mobaGames = games.filter(game => game.genre === "MOBA")


  return (
    <>
      <h2 style={{color:"red" , textAlign:"center"}} > Devolbers Games </h2>
      <Container className="m-10">
        <Row xs={1} sm={2} md={3} className="g-4 mt-4">
          {mobaGames.map(game => (
            <DevolberCard games={games} game={game} />
          ))}
        </Row>
      </Container>
    </>
  )
}

export default Home
