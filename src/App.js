import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="This is amazing React course" />
          <div className="container">
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/signup">
                <SingUp/>
              </Route>
            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
