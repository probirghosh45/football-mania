import './App.css';
import Home from './Components/Home/Home'
import NoMatch from './Components/NoMatch/NoMatch'
import TeamDetail from './Components/TeamDetail/TeamDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div >
         <Router>
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/team/:teamId">
                <TeamDetail></TeamDetail>
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch> 
    </Router>
    </div>
  );
}

export default App;
