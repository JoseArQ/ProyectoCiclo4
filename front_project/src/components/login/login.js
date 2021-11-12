import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Row, Col } from 'react-bootstrap';
import "./login.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            
        }
    }

    iniciarSesion(){
        alert(`username: ${this.state.username} -> password: ${this.state.password}`);
    }

  
    render() {
        return (
            <Container id="login-container">
                <Row> 
                    <Col>
                        <Row> 
                            <h2>Iniciar Sesión</h2>
                        </Row>
                        <Row>
                            <Col
                                sm="12"
                                xs="12"
                                md={{ span: 4, offset: 4}}
                                lg={{ span: 4, offset: 4}}
                                xl={{ span: 4, offset: 4}}
                                > 
                                <Form onSubmit={this.onFormSubmit}>
                                    <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Username" 
                                        onChange={(event) =>{
                                            this.setState({username:event.target.value});
                                        }}
                                    />
                                    </Form.Group>
                                    <Form.Group>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password"
                                        onChange={(event) =>{
                                            this.setState({password:event.target.value});
                                        }}
                                    /> 
                                    </Form.Group>

                                    <Button variant="info" type="button"
                                        onClick={() =>{
                                            this.iniciarSesion();
                                        }}>
                                        Iniciar Sesión
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        ) 
    }
}