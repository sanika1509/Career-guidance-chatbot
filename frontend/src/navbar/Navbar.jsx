import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/esm/Form";
import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import Offcanvas from "react-bootstrap/esm/Offcanvas";

export default function CustomizedNavbar(props) {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch the cookie value
    const cookieValue = getCookie("isUserLoggedIn");

    // Check if the cookie exists and set the user login status accordingly
    setUserLoggedIn(cookieValue === "true");
  }, []);

  // Function to get cookie by name
  const getCookie = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split("; ");

    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }

    return null;
  };

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-white sticky-top mb-3 shadow-sm p-3 mb-4 bg-white rounded"
        >
          <Container fluid>
            <Navbar.Brand href="#">Career guidance chatbot</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              {isUserLoggedIn ? (
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link>Chats</Nav.Link>
                    <Nav.Link>Profile</Nav.Link>
                  </Nav>

                  <Form className="d-flex">
                    <Button variant="btn btn-sm btn-danger">Logout</Button>
                  </Form>
                </Offcanvas.Body>
              ) : (
                ""
              )}
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
