import { Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item mx-3 txt">
              <Button variant="primary"><Link style={{color: 'white'}} to="/">Home</Link></Button>{' '}
            </li>
            
            <li class="nav-item mx-3 txt">
            <Button variant="secondary"><Link style={{color: 'white'}} to="/login">Login</Link></Button>{' '}
            </li>
            
            <li class="nav-item mx-3 txt">
            <Button variant="success"><Link style={{color: 'white'}} to="/register">Register</Link></Button>{' '}
            </li>
            <li class="nav-item mx-3 txt">
            <Button variant="danger"><Link style={{color: 'white'}} to="/register">Log out</Link></Button>{' '}
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
