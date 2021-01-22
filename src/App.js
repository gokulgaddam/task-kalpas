import React, { Component } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import Footer from "./components/Footer";

import pizza from "../src/assets/uthappizza.png";
import cake from "../src/assets/elaicheesecake.png";
import pakoda from "../src/assets/zucchipakoda.png";
import "./App.css";

class App extends Component {
  render() {
    var imageLinks = [pizza, cake, pakoda];
    var cards = imageLinks.map((i, index) => {
      return (
        <div className="col-md-4" key={index}>
          <Card image={i} />
        </div>
      );
    });
    return (
      <div className="App container-fluid ">
        <header className="App-header">
          <Header />
        </header>
        <section>
          <div className="row">
            <div className="col-2 ">
              <Sidebar />
            </div>

            <div className="col-9  cards">
              <div className="row">{cards}</div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
