import { useContext, useState } from "react";
import { Card, Button } from "react-bootstrap";
import GamesContext from "../ulist/GameContext";
import ModalItem from "./Modal";


function UsersCardGames (props) {
    const { usergame ,inProfile } = props
    const [ show , setshow ] = useState(false)
    const {deleteGames} = useContext(GamesContext)

    const handleClose = () => {
      setshow (false)
    }
    
    const handleOpen = () => {
      setshow(true)
    }
    return ( 
        <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={usergame.image} />
        <Card.Body>
          <Card.Title>{usergame.title}</Card.Title>
          <Card.Text>{usergame.description}</Card.Text>
          
          {inProfile ? (
            <>
            <Button variant="info" onClick={handleOpen} >
             EDIT
            </Button>
            <Button className="ms-2" variant="danger" onClick={deleteGames}> Delete </Button>
            </>
          ) : ( <Button href={usergame.url} variant="primary">
          PLAY THIS GAME!
        </Button> )}

        </Card.Body>
      </Card>
      <ModalItem show={show} handleClose={handleClose} />
        </>
     )
}

export

default  UsersCardGames;