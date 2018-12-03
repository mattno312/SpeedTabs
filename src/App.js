import React, { Component } from "react";
import "./App.css";
import { TabArea, Tab } from "./Tabs.js";
import Crawl from "./media/crawl.png";
import Five from "./media/5d.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TabArea>
          <Tab id="one" title="He's Hiding">
            <img src={Crawl} className="anim" />
          </Tab>

          <Tab id="two" title="Materialize!!">
            <img src={Crawl} className="hover" />
          </Tab>

          <Tab id="three" title="Say Hello">
            <img src={Crawl} className="zoom" />
          </Tab>
        </TabArea>
      </div>
    );
  }
}

export default App;
