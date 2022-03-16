
import Navbar from './navbar';
import Home from './home';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './Notfound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="contentw">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
          <div className="overlay"></div>
        <div className="custom-shape-divider-bottom-1647256045">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
    
</div>
        </div>
        </div>
    </Router>
     
  );
}

export default App;
