
import React, {useEffect} from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const SimpleNavWrapper = styled.div`
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

.navbar {
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: white;
}

.brand-title {
    font-size: 1.5rem;
    margin: .5rem;
}

.navbar-links {
    height: 100%;
}

.navbar-links ul {
    display: flex;
    margin: 0;
    padding: 0;
}

.navbar-links li {
    list-style: none;
}

.navbar-links li a {
    display: block;
    text-decoration: none;
    color: white;
    padding: 1rem;
}

.navbar-links li:hover {
    background-color: #555;
}

.toggle-button {
    position: absolute;
    top: .75rem;
    right: 1rem;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 21px;
}

.toggle-button .bar {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 10px;
}

@media (max-width: 800px) {
    .navbar {
        flex-direction: column;
        align-items: flex-start;
    }

    .toggle-button {
        display: flex;
    }

    .navbar-links {
        display: none;
        width: 100%;
    }

    .navbar-links ul {
        width: 100%;
        flex-direction: column;
    }

    .navbar-links ul li {
        text-align: center;
    }

    .navbar-links ul li a {
        padding: .5rem 1rem;
    }

    .navbar-links.active {
        display: flex;
    }
}
`;

const SimpleNav = () => {

    useEffect( () => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0]
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]

        toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active')
        })
    });

    return (
        <SimpleNavWrapper>
            <nav class="navbar">
                <div class="brand-title">Brand Name</div>
                <a href="#" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
                </a>
                <div class="navbar-links">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </div>
            </nav>            
        </SimpleNavWrapper>
    );
};

export default SimpleNav;