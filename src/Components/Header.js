import { useState, useContext } from "react";
import FoodFireLogo from "../Images/Food Fire Logo.png";
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";


// Title component for display logo
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={FoodFireLogo}
      alt="Food Zone Logo"
      title="Food Zone Logo"
    />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
  // use useState for user logged in or logged out
  const [isLoggedin, setIsLoggedin] = useState(false);

  const cartItems = useSelector(store => store.cart.items);

  const {user} = useContext(UserContext);



  const navigate = useNavigate();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>

          <li>
            <Link to="/cart">
              <i><i class="fa fa-shopping-cart"></i> {cartItems.length}</i>
            </Link>  
          </li>
          <li>

            {/* use conditional rendering for login and logout */}
            {isLoggedin ? (
              <button
                className="login-btn"
                onClick={() => setIsLoggedin(true)}
              >
                Login
              </button>
            ) : (
              <button className="logout-btn" onClick={() => navigate("/login")}>
                Logout
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
