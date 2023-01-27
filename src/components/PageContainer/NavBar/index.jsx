import { DataContext } from 'context/DataContext'
import { useContext } from 'react'
import { NavLink as Nav } from 'react-router-dom'
import styles from './index.module.css'

const NavLink = ({ to, text }) => {
    return <Nav
        className={({ isActive }) => isActive ? styles.activeLink : null}
        to={to}>{text}</Nav >
}
const NavBar = ({ }) => {

    const valu = useContext(DataContext)
    console.log(valu)

    return (
        <nav>
            <NavLink to="/" text="Home" />
            <NavLink to="/about" text="About" />
            <NavLink to="/services" text="Services" />
            <NavLink to="/yummie" text="Yummie" />
            <NavLink to="/login" text="Login" />
            <NavLink to="/starwars" text="StarWars" />
        </nav>
    )
}
export default NavBar
