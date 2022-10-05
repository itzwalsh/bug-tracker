import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";

import { IoIosChatboxes as DropDownChat } from "react-icons/io";
import { IoIosArrowDown as DropDownArrow } from "react-icons/io";

// PAGES
import Home from "./pages/Home";
import Permissions from "./pages/Permissions";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Tickets from "./pages/Tickets";
import Users from "./pages/Users";

//COMPONENTS

import Navbar from "./components/Navbar";
import NavItem from "./components/NavItem";
import DropdownMenu from "./components/DropdownMenu";
import Sidebar from "./components/Sidebar";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { apiResponse: "" };
  // }

  // callAPI() {
  //   fetch("http://localhost:9000/testAPI")
  //     .then((res) => res.text())
  //     .then((res) => this.setState({ apiResponse: res }));
  // }

  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <>
        <Router>
          <Navbar>
            <NavItem icon={<DropDownChat />} />
            <NavItem icon={<DropDownArrow />}>
              <DropdownMenu />
            </NavItem>
          </Navbar>

          <Sidebar />
          
          {/* <div>
            <p className="App-intro">;{this.state.apiResponse}</p>
          </div> */}
          
          <Routes>
            <Route path="/" exact element={<Home />} />

            <Route path="/permissions" element={<Permissions />} />
            <Route path="/registered-users" element={<Users />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
