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
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" class="nav-link" >
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/hotel" class="nav-link">
                hotel
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/service" class="nav-link" >
                service
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/blog" class="nav-link " >
                blog
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link " >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
