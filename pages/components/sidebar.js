import React, { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { Image, Icon } from "semantic-ui-react";
import Link from "next/link";

export default class Sidebar extends Component {
  componentDidMount() {
    console.log(this.props.active);
  }
  render() {
    return (
      <Menu {...this.props}>
        <div className="bm-item nav-content">
          <Image src="/assets/logo/cuckoo_club_logo.png" className="logo" />
          <div className="links">
            <Link href="/">
              <a className="menu-item active">Home</a>
            </Link>
            <Link href="/">
              <a className="menu-item">Roadmap</a>
            </Link>
            <Link href="/">
              <a className="menu-item">Team</a>
            </Link>
          </div>
          <div className="social-icons">
            <a title="Medium" href="https://medium.com/">
              <Icon name="medium"></Icon>
            </a>
            <a title="Youtube" href="https://www.youtube.com/">
              <Icon name="youtube square"></Icon>
            </a>
          </div>
        </div>
      </Menu>
    );
  }
}
