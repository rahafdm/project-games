import { Card, Button, Col, Row } from "react-bootstrap"
import styles from "./mystyle.module.css"

function DevolberCard(props) {
  const { game } = props
 

  return (
    <Col>
    

      <Card me="3"  style={{ width: "25rem", backgroundColor: "rgb(190, 199, 211)", borderRadius: "10px", fontFamily:"Isemin" }}>
        <Card.Body >
        <Card.Img  style={{borderRadius:"15px"}} variant="top" src={game.thumbnail} />
        <Card.Body>
          <Card.Title className={styles.title}>{game.title}</Card.Title>
          <Card.Text className={styles.text}>{game.short_description}</Card.Text>
          <Row>
          <Button href={game.game_url} target="_blank" variant="outline-dark">
            Play this game
          </Button>
          </Row>
        </Card.Body>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default DevolberCard
