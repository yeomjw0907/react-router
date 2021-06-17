import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import './App.css';
import Home from "./Home.js"
import Subpage from "./Subpage.js"


function App() {
  return (
    <div className="App">
      <h1>두번째 단계</h1>
      <p>이번에도 성공하면 좋겠네</p>
      <BrowserRouter>
        {/*         <Link to="/Home">메인 페이지 돌아가기</Link><br></br> */}
        <Link to="/subpage">서브페이지 이동하기</Link>
        <Switch>
          <Route path="/Home" exact component={Home}></Route>
          <Route path="/subpage" component={Subpage}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;