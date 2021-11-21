
import { Card, Button, Col } from "react-bootstrap"
import GamesContext from "../ulist/GameContext"
import styles from "./mystyle.module.css"

function DevolberCard(props) {
  const { game } = props
  // const { games } = useContext(GamesContext)
  // console.log(games)
  // console.log(mobaGames)

  return (
    <Col>

      <Card me="3" className={styles.card} style={{ width: "25rem" }}>
        <Card.Img className={styles.img} variant="top" src={game.thumbnail} />
        <Card.Body>
          <Card.Title className={styles.title}>{game.title}</Card.Title>
          <Card.Text className={styles.text}>{game.short_description}</Card.Text>
          <div className={styles.mybtn}>
            <Button href={game.game_url}>Play this game</Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default DevolberCard
