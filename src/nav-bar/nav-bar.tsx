import React from 'react'
import {nav, column} from './nav-bar.module.scss'

const NavBar = () => {
    return (
        <div className={nav}>
            <div className={column}>Menu</div>
            <div className={column}>Diary</div>
            <div className={column}>Bookkeeping</div>
        </div>
    )
}

export default NavBar