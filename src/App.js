import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// A component is a function that must return something, usually a JSX template then we export it at the bottom


function App() {
  return ( 
    <Router>
    <div className="App">
      {/* Since Navbar is outside of the  Switch*/}
      <Navbar/>
      <div className="content">
        {/* Switch component makes sure that only one route shows that only one time */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id" element={<BlogDetails/>}>
            <BlogDetails />
          </Route>
          <Route path="*"> 
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App; // Must export components so we can use them in other files
