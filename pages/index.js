import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import ReactFullpage from "@fullpage/react-fullpage";
import {
  Container,
  Header,
  Image,
  Icon,
  Button,
  Card,
  Grid,
  Divider,
  Label,
} from "semantic-ui-react";

export class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }
  closeMenu() {
    this.setState({ menuOpen: false });
  }
  toggleMenu() {
    this.setState((state) => ({
      menuOpen: !state.menuOpen,
    }));
  }
  render() {
    return (
      <div id="App">
        <Sidebar
          pageWrapId={"full-screen"}
          outerContainerId={"App"}
          isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)}
          active={"projects"}
        />
        <main id="full-screen">
          <div className="light-nav">
            <Container>
              <div className="header-content">
                <div>
                  <Header as="h2">
                    <Image src="/assets/logo/cuckoo_club_logo.png" />
                    <Header.Content>Cuckoo Club</Header.Content>
                  </Header>
                </div>
                <div>
                  <Button
                    inverted
                    icon
                    size="big"
                    onClick={() => this.toggleMenu()}
                  >
                    <Icon name="bars" />
                  </Button>
                </div>
              </div>
            </Container>
          </div>
          <div className="projects-page">
            <ReactFullpage
              navigation
              render={(comp) =>
                console.log("render prop change") || (
                  <ReactFullpage.Wrapper>
                    {
                      <div>
                        <div className="section" data-anchor="">
                          <div className="content">
                            <Icon
                              inverted
                              name="chevron down"
                              className="go-down bounce"
                            />
                          </div>
                          <div className="lowpoly"></div>
                        </div>
                        <div className="section" data-anchor="">
                          <div className="content"></div>
                          <div className="lowpoly"></div>
                        </div>
                        <div className="section" data-anchor="">
                          <div className="content"></div>
                          <div className="lowpoly"></div>
                        </div>
                        <div className="section" data-anchor="">
                          <div className="content"></div>
                          <div className="lowpoly"></div>
                        </div>
                      </div>
                    }
                  </ReactFullpage.Wrapper>
                )
              }
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Index;
