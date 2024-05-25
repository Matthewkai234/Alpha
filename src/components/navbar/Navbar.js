import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import {
  BrightnessHighFill,
  Cart,
  Heart,
  MoonStarsFill,
  PersonExclamation,
  Search,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";

export default function NavBar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", theme);
    }

    if (theme === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const themeStyle = useMemo(() => {
    if (theme === "light") {
      return <BrightnessHighFill />;
    }
    if (theme === "dark") {
      return <MoonStarsFill />;
    }
  }, [theme]);

  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#company-name">PaliParts</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link
              as={Link}
              to="/"
              className="item-in-nav"
              style={{
                marginRight: "45px",
                fontSize: "20px",
                fontFamily: "Cambria",
                fontWeight: "bold",
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/shop"
              className="item-in-nav"
              style={{
                marginRight: "45px",
                fontSize: "20px",
                fontFamily: "Cambria",
                fontWeight: "bold",
              }}
            >
              Shop
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className="item-in-nav"
              style={{
                marginRight: "45px",
                fontSize: "20px",
                fontFamily: "Cambria",
                fontWeight: "bold",
              }}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className="item-in-nav"
              style={{
                fontSize: "20px",
                fontFamily: "Cambria",
                fontWeight: "bold",
              }}
            >
              Contact
            </Nav.Link>
          </Nav>

          <Nav
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              style={{
                marginRight: "20px",
                background: "none",
                border: "none",
              }}
            >
              <PersonExclamation style={{ width: "30px", height: "30px" }} />
            </button>
            <button
              type="button"
              style={{
                marginRight: "20px",
                background: "none",
                border: "none",
              }}
            >
              <Cart style={{ width: "25px", height: "25px" }} />
            </button>
            <button
              type="button"
              style={{
                marginRight: "20px",
                background: "none",
                border: "none",
              }}
            >
              <Heart style={{ width: "25px", height: "25px" }} />
            </button>
            <button
              type="button"
              style={{
                marginRight: "20px",
                background: "none",
                border: "none",
              }}
            >
              <Search style={{ width: "25px", height: "25px" }} />
            </button>

            <NavDropdown title={themeStyle}>
              <NavDropdown.Item onClick={() => setTheme("dark")}>
                <MoonStarsFill />
                Dark
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => setTheme("light")}>
                <BrightnessHighFill />
                Light
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}