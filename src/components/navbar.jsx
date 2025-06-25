import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const path = e.target.value;
    if (path) {
      navigate(path);
    }
  };

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
            <button class="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav  ">
              <li className="mt-4 ">
                <Link style={{color:"black" , textDecoration:"none", fontSize:"18px"}} to="/">home</Link>
              </li>
              <li className="mt-4">
                <select
                  className="form-control w-25 text-center justify-content-center"
                  onChange={handleSelectChange}
                  name=""
                  id=""
                >
                  <option>hotel </option>
                  <option value="/hotel">hotel </option>
                  <option value="/hotel">luxe hotel </option>
                  <option value="/hotel">deluxe hotel </option>
                  <option value="/hotel">king hotel </option>
                  <option value="/hotel">fivestart hotel </option>
                </select>
              </li>
              <li className="mt-4">
                <Link style={{color:"black" , textDecoration:"none", fontSize:"18px"}} to="/service">service</Link>
              </li >
              <li className="mt-4">
                <Link style={{color:"black" , textDecoration:"none", fontSize:"18px"}} to="/blog">blog</Link>
              </li >
              <li className="mt-4">
                <Link style={{color:"black" , textDecoration:"none", fontSize:"18px"}} to="/contact">contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
