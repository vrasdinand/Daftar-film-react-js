import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/">Website FILM Layar Kita</Navbar.Brand>
          <Nav>
            <Nav.Link href="#trending">TRENDING</Nav.Link>
            <Nav.Link href="#upcoming">UPCOMING</Nav.Link>
            <Nav.Link href="#toprated">TOP RATED</Nav.Link>
            <Nav.Link href="#tvseries">TV SERIES</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar
