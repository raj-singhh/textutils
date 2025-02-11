// <--React function based components -->

import PropTypes from "prop-types";


// import { Link } from "react-router-dom";

export default function Navbar(props) {
 


  return (
    <nav
      className={`navbar navbar-expand-lg navbarcolor `} id="navbar"

    >
      <div className={`container-fluid navbar-${props.mode=== 'light' ? 'light' : 'dark'}`} >
        {/* <Link className="navbar-brand" to="/">
          {props.title}
        </Link> */}
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link> */}
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              {/* <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link> */}
              <a className="nav-link" href="/about">
                {props.aboutText}
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
  {/*<-- dark mode button --> */}
          <div className={` form-check form-switch mx-3 text-${props.mode=== 'light' ? 'dark' : 'light cursor'}`}>
            <input
              className="form-check-input pointer-cursor "
              type="checkbox"
              role="switch"
              onClick={props.toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              {props.mode=== 'light' ? 'Enable' : 'Disable'} DarkMode
            </label>
          </div>
          
          {/* To choose different colors in dark mode */}

          

          { props.mode === 'dark' && <div className="btn-group">
              <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              Colors
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" type="button" onClick={()=>props.changeColor('#ff0000')}>Red</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>props.changeColor('#808080')}>Grey</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>props.changeColor('#ff1a75')}>Pink</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>props.changeColor('#f2b202')}>Yellow</button></li>
                <li><button className="dropdown-item" type="button" onClick={()=>props.changeColor('#ff6600')}>Orange</button></li>
                <li><hr class="dropdown-divider"/></li>
                <li><button className="dropdown-item" type="button" onClick={()=>props.changeColor('default')}>Default</button></li>
              </ul>
            </div> 
          }




        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = { title: "Set title here", aboutText: "About text here" };
