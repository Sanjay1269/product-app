import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from "./componets/Home";
import AddProduct from "./componets/AddProduct";
import Products from "./componets/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Ekart</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/products">Products</Link>
                <Link to="/add-product">Add Product</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div>
          <Route path="/products" component={Products} />
          <Route exact={true} path="/" component={ Home} />
          <Route path="/add-product" component={AddProduct } />
        </div>
      </div>
    </Router>
  );
}

export default App;