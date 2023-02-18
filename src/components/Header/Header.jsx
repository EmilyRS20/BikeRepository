import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";

const navLinks = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/about",
      display: "About",
    },

    {
      path: "/bikes",
      display: "Bikes",
    },
  
    {
      path: "/blogs",
      display: "Blog",
    },
    {
      path: "/contact",
      display: "Contact",
    },
  ];
  
  const Header = () => {
    const menuRef = useRef(null);
  
    const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

    return (
    <header className="header">

        {/*  header top */}
        <div className="header__top">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header_top_help">
                <i class="ri-phone-line"></i>  +4382294
                </span>
                </div>
               </Col>

               <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">

                <Link to="/login" className=" d-flex align-items-center gap-1">
                <i class="ri-login-circle-fill"></i> Login</Link>


                <Link to="/signup" className=" d-flex align-items-center gap-1">
                <i class="ri-user-fill"></i> SignUp</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* header middle  */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-riding-line"></i>
                    <span>
                      Rent Bike <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Canada</h4>
                  <h6>Montreal, Canada</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Saturday to Friday</h4>
                  <h6>7am - 10pm</h6>
                </div>
              </div>
            </Col>

            <Col lg="2" md="3" sm="0" className=" d-flex align-items-center justify-content-end ">
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Call Us
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/*  main navigation  */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink to={item.path} className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>

    </header>
  );
};

export default Header;
