import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Connect } from './components/connect/Connect';
import { Create } from './components/create/Create';
import Home from './components/home/Home';
import { Rules } from './components/rules/Rules';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/connect">
            <Connect/>
          </Route>
          <Route path="/rules">
            <Rules/>
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
