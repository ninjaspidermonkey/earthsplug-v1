
import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import logo from '../Images/logo.png';

const NavbarWrapper = styled.div`
    div {color: #1b1b1b};

    .logo {
        border-radius: 8px;
    }
`;

const Navbar = () => {

    return (
        <NavbarWrapper>
            <div>hi</div>
            <img className="logo" src={logo} alt="" width="10%" height="10%" />
        </NavbarWrapper>
    );
};

export default Navbar;