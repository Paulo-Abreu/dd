import "./App.css";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MonsterInfo from "./components/monsterInfo";
import Home from './home';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/" exact={true}>            
            <Home />
        </Route>
          <Route path="/monsters-info/:name">
            <MonsterInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
