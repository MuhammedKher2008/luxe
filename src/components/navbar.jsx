import { Link } from "react-router-dom";

const Navbar = () => {
  const logo = {
    fontSize: "20px",
    textTransform: "uppercase",
    fontWeight: "300",
    float: "left",
  };
  return (
    <div class="navbar bg-light">
      <div class="container">
        <a style={logo} href="#" class="navbar-brand">
          lexu
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" id="offcanvas" tabindex="-1">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">title</h5>
            <button class="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav">
              <li>
                <Link to="/">home</Link>
              </li>
              <li>
                <Link to="/service">service</Link>
              </li>
              <li>
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
