import React, { useEffect, useState } from "react";
import { Container, Navbar, Offcanvas, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  // sticky Header
  const isSticky = (e) => {
    const header = document.querySelector(".header-section");
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add("is-sticky") : header.classList.remove("is-sticky");
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/" className="logo">TripPlanner</NavLink>
          </Navbar.Brand>
          {/* End Logo Section */}

          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="start"
            show={open}
            onHide={toggleMenu}
          >
            {/* Mobile Logo Section */}
            <Offcanvas.Header closeButton>
              <h1 className="logo">TripPlanner</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            {/* End Mobile Logo Section */}

            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/About">
                  ABOUT US
                </NavLink>
                <NavLink className="nav-link" to="/destination">
                  DESTINATION
                </NavLink>
                <NavLink className="nav-link" to="/gallery">
                  GALLERY
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  CONTACT
                </NavLink>
                <NavLink className="nav-link" to="/hotellist">
                  Hotels
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <li className="d-inline-block d-lg-none ms-3 toggle_btn">
            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
          </li>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
