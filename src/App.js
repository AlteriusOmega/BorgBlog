import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';

// A component is a function that must return something, usually a JSX template then we export it at the bottom


function App() {
  return ( 
    // Router surrounds entire application 
    <Router>
    <div className="App">
      {/* Since Navbar is outside of the Switch it will show for every page */}
      <Navbar/>
      <div className="content">
          {/* Switch component makes sure that only one route shows that only one time */}
          {/* TODO update Switch to Routes component as of React Router v6  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App; // Must export components so we can use them in other files
