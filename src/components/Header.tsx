import React, { useEffect, useState } from "react";
import CartCanva from "./CartCanva";
import { useCart } from "./useCart";
import { useAppContext } from "./AppContext";

type Props = {};

const Header: React.FC<Props> = (props: Props) => {
  const { cartLength } = useAppContext();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-primary position-relative badge-btn ms-2 p-0  d-lg-none d-block"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <i className="bi bi-cart4"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {cartLength}
              </span>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
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
          </div>
          <button
            type="button"
            className="btn btn-primary position-relative badge-btn ms-2 p-0 d-lg-block d-none"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <i className="bi bi-cart4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {cartLength}
            </span>
          </button>
        </div>
      </nav>
      <CartCanva />
    </>
  );
};

export default Header;
