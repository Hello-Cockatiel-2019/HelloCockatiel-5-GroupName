import React, { useState } from 'react';
import { css } from 'styled-components';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const navstlye = css`
padding-right:200px;
`

const Example = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div >
            <Navbar color="dar" dark expand="xl">
                <NavbarBrand href="/" ><img src="/images/picture/smalllogo.png" width="75px" height="50px" /></NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className={navstlye} navbar>
                        <NavItem >
                            <NavLink href="/components">HOME</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">ABOUT </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">GENDER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">CATEGORY</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">OTHER</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#test">CONTACT US</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;