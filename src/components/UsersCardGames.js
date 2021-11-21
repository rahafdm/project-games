import { useContext } from "react";


function UsersCardGames () {
    const { usergame } = useContext(GamesContext)
    return ( 
        <>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={usergame.image} />
        <Card.Body>
          <Card.Title>{usergame.title}</Card.Title>
          <Card.Text>{usergame.description}</Card.Text>
          <Button href={usergame.url} variant="primary">
            PLAY THIS GAME!
          </Button>
        </Card.Body>
      </Card>
        </>
     );
}

export

default  UsersCardGames;