import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header = () => {
    const history = useNavigate();
    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={{height: "60px"}} >
                <Container>
                    <NavLink to="/" className="text-decoration-none text-light mx-4">Netfilix</NavLink>
                    <Nav className="ms-auto">
                        <NavLink to="/" className="text-decoration-none text-light mx-3">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">About us</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light mx-3">Bollywood Movies</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light">Hollywood Movies</NavLink>
                        <NavLink to="/" className="text-decoration-none text-light mx-3">Contact us</NavLink>
                    
                    </Nav>
                </Container>
                <Button onClick={userlogout} style={{float:"right"}}>LogOut</Button>
            </Navbar>
        </>
    )
}

export default Header