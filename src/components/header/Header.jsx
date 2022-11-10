import React, { useState } from "react"
import Head from "./Head"
import "./header.css"
import { Link } from "react-router-dom"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Header = () => {
  const [navbar, setNavbar] = useState(false)
  const toggle = () => setNavbar(!navbar);

  return (
    <>
      <Head />
      <header>
        <div className='container paddingSmall'>
          <Navbar dark expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={navbar} navbar>
              <Nav className="me-auto" navbar>
                <NavItem className="navitem">
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink href="/culture">Culture</NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink href="/politics">Politics</NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink href="/sports">Sports</NavLink>
                </NavItem>
                <NavItem className="navitem">
                  <NavLink href="/entertainment">
                    Entertainment
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          {/* <nav>
            <ul className={navbar ? "navbar" : "flex"} onClick={() => setNavbar(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/culture'>Culture</Link>
              </li>
              <li>
                <Link to='/politics'>Politics</Link>
              </li>
              <li>
                <Link to='/memes'>Memes</Link>
              </li>
              <li>
                <Link to='/sports'>Sports</Link>
              </li>
              <li>
                <Link to='/boxed'>Boxed</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
            </ul>
            <button className='barIcon' onClick={() => setNavbar(!navbar)}>
              {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
            </button>
          </nav> */}
        </div>
      </header>
    </>
  )
}

export default Header
