
import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../Images/logo.png';

const NavbarWrapper = styled.div`

    .navbar {
        position: relative;
        display: flex;
        //justify-content: space-between;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        line-height: 100%;
        color: #1b1b1b;
        background-color: #f5f5f5;
        align-items: center;
        padding: 5%;
        max-height: 7vh;
    }
    .nav-links {
        display: flex;
        //flex-direction: row;
        justify-content: center;
        padding: 0 10%;
        a, li {
            color: #2b2b2b;
            font-size: 1rem;
            display: block;
            padding: 0 10%;
        }
    }
    a {
        font-weight: 400;
        letter-spacing: 1.25px;
        text-transform: uppercase;
        //color: #1b1b1b;
    }
    .menu-btn, .material-symbols-outlined {
        position: absolute;
        right: 1rem;
        display: none;
        flex-direction: column;
        background-color: transparent;
        color: #1b1b1b;
        font-size: 1.5rem;
        float: right;
        &:hover {
            cursor: pointer;
        }
    }
    .logo {
        background: url(${logo});
        width: 2rem;
        height: 2rem;
        background-size: cover;
        border-radius: 10px;
    }

    @media (max-width: 500px) {
        .menu-btn, .material-symbols-outlined {
            display: flex;
        }
        .nav-links {
            //display: none;
            width: 100%;
            flex-direction: column;
            align-items: center;
            border: 2px solid red;
        }
    }

`;

const Navbar = () => {

    useEffect( () => {
        const menuBtn = document.getElementsByClassName("material-symbols-outlined")[0];
        const navLinks = document.getElementsByClassName("nav-links")[0];
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }, []);

    return (
        <NavbarWrapper>
            <div className='navbar'>
                        <Link activeClass="active"
                            to="hero"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
                        ><div href="/" className="logo"></div></Link>
                <ul className='nav-links'>
                    <li><a href='/'>about</a></li>
                    <li><a href='/'>products</a></li> 
                    <li><a href='/'>contact</a></li> 
                </ul>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </NavbarWrapper>
    );
};
export default Navbar;