import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>오늘 끝장 본다</h1>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <button>
            <Link to="/beauty">뷰티</Link>
          </button>
        </ul>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/beauty" component={Beauty}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <div>Home component</div>;
}

function Beauty() {
  return <div>Beauty component</div>;
}

export default App;
