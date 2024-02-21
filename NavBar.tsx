
import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink, Link } from 'react-router-dom';



export function NavBar() {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavbarBs sticky='top' className='bg-white shadow-lg mb-3 '>
      <Container className='d-flex justify-content-center align-items-center'>
        {/* Logo and NavLinks in the center */}
        <div className='d-flex align-items-center'>
         <Link to='/'> <img src='imgs/rev.PNG' alt="Logo" style={{ width: '50px', marginRight: '10px' }}  /></Link>
          <Nav className='me-auto'>
            <Nav.Link as={NavLink} to="/" className="nav-link"  >
              Home
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/contact" className="nav-link" >
              Contact
            </Nav.Link>
          
            <Nav.Link as={NavLink} to="/features" className="nav-link" >
              Features
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store" className="nav-link" >
              Store
            </Nav.Link>
          </Nav>
        </div>

        {/* Shopping Cart Button */}
        {cartQuantity > 0 && (
                 <Button
                 onClick={openCart}
                 style={{ width: '3rem', height: '3rem', position: 'relative' }}
                 variant='outline-primary'
                 className='rounded-circle'
               >
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   height="16"
                   width="18"
                   viewBox="0 0 576 512"
                 >
                   <path
                     d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                     fill="#000000"
                   />
                 </svg>
                 <div className='rounded-circle bg-danger d-flex justify-content-center align-items-center' style={{ color: 'blue', width: '1.5rem', position: 'absolute', bottom: 0, right: 0, transform: 'translate(25%, -25%)' }}>
                   {cartQuantity}
                 </div>
               </Button>
        )}
      </Container>
    </NavbarBs>
  );
}