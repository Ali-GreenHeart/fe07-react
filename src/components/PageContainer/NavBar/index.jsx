import { AlertContext } from 'context/AlertContext'
import { ModeContext } from 'context/ModeContext'
import { useContext } from 'react'
import { NavLink as Nav } from 'react-router-dom'
import styles from './index.module.css'

const NavLink = ({ to, text }) => {
    return <Nav
        className={({ isActive }) => isActive ? styles.activeLink : null}
        to={to}>{text}</Nav >
}
const NavBar = ({ }) => {

    const [dark, setDark] = useContext(ModeContext)
    const showAlert = useContext(AlertContext)
    return (
        <nav>
            <NavLink to="/" text="Home" />
            <NavLink to="/about" text="About" />
            <NavLink to="/services" text="Services" />
            <NavLink to="/yummie" text="Yummie" />
            <NavLink to="/login" text="Login" />
            <NavLink to="/starwars" text="StarWars" />
            <button
                onClick={() => {
                    setDark((pre) => !pre)  // state-in evvelki deyeri
                }}
            >{dark ? '☀' : '🌙'}</button>
            <button onClick={() => {
                showAlert({
                    message: 'salam abi xos gelmisen',
                    type: 'error'
                })
            }}>click to show alert</button>
        </nav>
    )
}
export default NavBar
