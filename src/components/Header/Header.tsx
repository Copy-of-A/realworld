import { Link, NavLink } from "react-router-dom"
import { LayoutContainer } from "../../containers/LayoutContainer/LayoutContainer"
import './header.scss'

export const Header = () => {
    return (
        <LayoutContainer>
            <header className="header">
                <Link className="header__logo" to="/home">conduit</Link>
                <nav className="nav">
                    <NavLink to="/home" className="nav__item">Home</NavLink>
                    <NavLink to="/login" className="nav__item">Sign in</NavLink>
                    <NavLink to="/register" className="nav__item">Sign up</NavLink>
                </nav>
            </header>
        </LayoutContainer>
    )
}