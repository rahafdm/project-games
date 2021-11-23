import { Carousel, Row, Col } from "react-bootstrap"
import Game1 from "../images/game1.jpg"
import Game2 from "../images/game2.jpg"
import Game3 from "../images/game3.jpg"
import Game4 from "../images/game4.jpg"
import styles from "./mystyle.module.css"

function CarouselGames() {
  return (
    <>
      <Row>
        <Col md="8" className="mx-auto mt-5">
          <h1 className={styles.title2}> - TOP 4 - </h1>

          <Carousel>
            <Carousel.Item>
              <img className={styles.item} src={Game1} height="400px" alt="black survival" />
              <Carousel.Caption>
                <p> go ahead and play this GAME !! </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game2} height="400px" alt="Heavy metal Machinse" />

              <Carousel.Caption>
                <p> signUP for more like this </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game3} height="400px" alt="SpellsWorn" />

              <Carousel.Caption>
                <p> your world to finde new games </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className={styles.item} src={Game4} height="400px" alt="Awosome Nuts" />
              <Carousel.Caption>
                <p> Happy game Happy Life </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </>
  )
}

export default CarouselGames
