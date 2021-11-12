import {React, Component} from 'react'
import { Container, Dropdown, DropdownButton, Nav, Navbar, Row } from 'react-bootstrap'
import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from "@fortawesome/free-solid-svg-icons"

export default class TopMenu extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render(){
        return(
            <Navbar fixed="top" id="navbar" bg="info" variant="dark">
                <Container>
                    <img className="logo" src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" alt="..."/>
                    <Navbar.Brand href="#home">
                        Grupo 14 Mintic<span id="usuario-sub-branm"></span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>

                            <DropdownButton id="dropdown-basic-button" title="Users">

                                <Dropdown.Header id="dropdown-header">
                                    <Row>
                                        <FontAwesomeIcon icon={faUserCircle} />
                                    </Row>
                                    <Row>
                                        Usuario
                                    </Row>
                                    <Dropdown.Divider />
                                </Dropdown.Header>
                                <Dropdown.Item href="#/action-1">Cerrar Sesion</Dropdown.Item>
                            </DropdownButton>
                        </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}