import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/Abstracts/NavBar.scss"

export default function NavBar() {
    return (
        <nav>
            <section className='container'>
                <Link to="/">Login</Link>
                <Link to="/sobre">Sobre</Link>
            </section>
        </nav>
    )
}
