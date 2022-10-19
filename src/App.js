
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import NoteState from './context/notes/NoteState';

function App() {
  return (
   <>
   <NoteState>
   <Router>
    <Navbar/>
    <Switch>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    </NoteState>
   </>
  );
}

export default App;
