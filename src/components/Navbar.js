import { useContext } from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import GamesContext from "../ulist/GameContext"

function NavbarItem() {
const { handleOpenSignup, handleOpenLogin, logout } = useContext(GamesContext)
  return (
    <>

      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand> Games </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Games by Devolbers
              </Link>
              {localStorage.tokenGame ? (
                <Nav className="me-auto">
                  <Link to="/user/games" className="nav-link">
                    Game by Users
                  </Link>
                </Nav>
              ) : null}
            </Nav>
            {localStorage.tokenGame ? (
              <Nav className="ms-auto">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="/" className="nav-link" onClick={logout}>
                  Logout
                </Link>
              </Nav>
            ) : (
              <Nav className="ms-auto">
                <div onClick={handleOpenSignup} className="nav-link">
                  Sign Up
                </div>
                <div onClick={handleOpenLogin} className="nav-link">
                  Login
                </div>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarItem
