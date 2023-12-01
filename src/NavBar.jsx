import './NavBar.css'
import {FaBars, FaTimes} from 'react-icons/fa'
import { useRef } from 'react'

function NavBar(){
    const navRef = useRef()

    const showNavbar  = () =>{
        navRef.current.classList.toggle("responsive_nav")

    }
    return(
        <header>
            <h3>logo</h3>
            <nav ref={navRef}>
                <a href="#">Home</a>
                <a href="#">service Us</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>

                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes />
            </button>

            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars />
            </button>

        </header>
    )

}

export default NavBar