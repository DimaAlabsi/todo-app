import React, { Component } from 'react';
import { Navbar, Button, Alignment } from "@blueprintjs/core";
import { Link } from "react-router-dom";

 class Header extends Component {
    render() {
        return (
            <Navbar class="bp3-navbar bp3-dark">
            <Navbar.Group align={Alignment.LEFT}>
                <Navbar.Heading>TO DO List Manager 📔</Navbar.Heading>
                <Navbar.Divider />
                {/* <a href="/todo-app"> */}
            {/* <Button className="bp3-minimal" icon="home" text="Home" />
          </a>
          <a href="/form">
            <Button
              className="bp3-minimal"
              icon="document"
              text="setting"
            ></Button>
          </a>
      <Button class="bp3-Button bp3-minimal bp3-icon-notifications"></Button> */}
            </Navbar.Group>
        </Navbar>
        )
    }
}

export default Header
