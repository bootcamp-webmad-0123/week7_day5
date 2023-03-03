import { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/auth.context'
import { ThemeContext } from '../../contexts/theme.context'

const Navigation = () => {

    const { themeValue, switchTheme } = useContext(ThemeContext)
    const { user, logout } = useContext(AuthContext)

    const navbarStyle = themeValue === 'dark' ? 'light' : 'dark'
    const themeText = themeValue === 'light' ? 'Tema oscuro' : 'Tema claro'

    return (
        <Navbar bg={navbarStyle} variant={navbarStyle} expand="md" className='mb-4'>
            <Container>
                <Navbar.Brand href="#home">Coasters App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">
                            <Nav.Link as="span">Inicio</Nav.Link>
                        </Link>
                        <Link to="/galeria">
                            <Nav.Link as="span">Galeria</Nav.Link>
                        </Link>
                        <Link to="/crear">
                            <Nav.Link as="span">Crear montaña</Nav.Link>
                        </Link>

                        {
                            user
                                ?
                                <>
                                    <Nav.Link as="span" onClick={logout}>Cerrar sesión</Nav.Link>
                                </>
                                :
                                <>
                                    <Link to="/iniciar-sesion">
                                        <Nav.Link as="span">Iniciar sesión</Nav.Link>
                                    </Link>
                                    <Link to="/registro">
                                        <Nav.Link as="span">Registrarme</Nav.Link>
                                    </Link>
                                </>
                        }

                    </Nav>
                    {user && <Navbar.Text>Bienvenid@, {user.username} | </Navbar.Text>}
                    <Navbar.Text>
                        <span onClick={switchTheme} className="d-flex">{themeText}</span>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation