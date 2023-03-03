import './Footer.css'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'

const Footer = () => {

    const { themeValue } = useContext(ThemeContext)

    const footerStyle = {
        backgroundColor: themeValue === 'dark' ? '#ffffff' : '#212529',
        color: themeValue === 'dark' ? '#000000' : '#ffffff'
    }

    return <footer style={footerStyle}>Todos los derechos reservados</footer>
}

export default Footer