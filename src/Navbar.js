import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The Borg Blog</h1>
            <div>
                {/* Link replaces <a> anchor tags, href is replaced with to */}
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "var(--text)",
                    backgroundColor: "var(--navbr-hover)",
                    borderRadius: "8px"
                }}>New Blog Entry</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;