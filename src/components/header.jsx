import * as React from 'react'
import { Link } from 'gatsby'
import Headroom from 'react-headroom'
import "../styles/header.scss"

const NavBar = () => {
  return (
    <Headroom>
        <header>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
        </header>
    </Headroom>
  )
}

export default NavBar

