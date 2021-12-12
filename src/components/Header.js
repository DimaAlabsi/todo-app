import React, { Component } from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";

 class Header extends Component {
    render() {
        return (
            <Navbar class="bp3-navbar bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>TO DO List Manager 📔</Navbar.Heading>
                <Navbar.Divider />
                <Button className="bp3-minimal" icon="home" text="Home" />
                <span class="bp3-navbar-divider"></span>
      <Button class="bp3-Button bp3-minimal bp3-icon-user"></Button>
      <Button class="bp3-Button bp3-minimal bp3-icon-notifications"></Button>
      <Button class="bp3-button bp3-minimal bp3-icon-cog"></Button>
            </Navbar.Group>
        </Navbar>
        )
    }
}

export default Header
