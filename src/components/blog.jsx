import plaj1 from "./image/alexander-videnov-2-cvrZDeKnw-unsplash.jpg";
import plaj2 from "./image/francesco-d-ascenzo-NjFqlmjNJ-o-unsplash.jpg";
import plaj3 from "./image/mp-fV2dM2WvKvE-unsplash.jpg";

function Blog() {
  return (
    <>
      <div
        id="anacontaier"
        className="container-fluid d-flex align-items-center justify-content-center "
      >
        <div className="row ">
          <div className="col-md-12">
            <h1
              style={{ fontWeight: "300", fontSize: "30px" }}
              className="text-white text-center mb-2"
            >
              Read Our Blog
            </h1>
            <p style={{ fontWeight: "300" }} className="text-center text-white">
              Made with love by the fine folks at FreeHTML5.co
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row justify-content-around">
          <div className="col-md-3  ">
            <img src={plaj1} className="img-fluid" alt="" />
            <div
              className="card-footer "
              style={{ border: "1px solid #e6e6e6" }}
            >
              <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                Most Expensive Hotel
              </p>
            </div>
          </div>
          <div className="col-md-3  ">
            <img src={plaj2} className="img-fluid" alt="" />
            <div
              className="card-footer "
              style={{ border: "1px solid #e6e6e6" }}
            >
              <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                1st Anniversary of Luxe Hotel
              </p>
            </div>
          </div>
          <div className="col-md-3  ">
            <img src={plaj3} className="img-fluid" alt="" />
            <div
              className="card-footer "
              style={{ border: "1px solid #e6e6e6" }}
            >
              <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                Discover New Adventure
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-around mt-5">
          <div className="col-md-3  ">
            <img src={plaj1} className="img-fluid" alt="" />
            <div
              className="card-footer "
              style={{ border: "1px solid #e6e6e6" }}
            >
              <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                Most Expensive Hotel
              </p>
            </div>
          </div>
          <div className="col-md-3  ">
            <img src={plaj2} className="img-fluid" alt="" />
            <div
              className="card-footer "
              style={{ border: "1px solid #e6e6e6" }}
            >
              <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                1st Anniversary of Luxe Hotel
              </p>
            </div>
          </div>
          <div className="col-md-3  ">
            <img src={plaj3} className="img-fluid" alt="" />
            <div
              className="card-footer "
              style={{ border: "1px solid #e6e6e6" }}
            >
              <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                Discover New Adventure
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container-fluid mt-5 p-5"
        style={{ backgroundColor: "rgb(230, 230, 230)" }}
      >
        <div className="row">
          <div className="col-md-12 ">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <p className="m-1">© 2016 Free HTML5 </p>
                  <p className="m-1">All Rights Reserved.</p>
                  <p className="m-1">Designed by mx1_15</p>
                  <p className="m-1">Demo Images: Unsplash</p>
                </div>
                <div className="col-md-3">
                  <div className="row">
                    <div className="col-md-6">
                      <p className="fs-4">company</p>

                      <ul className="list-unstyled">
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          About Us
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Hotels
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Customer Care
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Contact Us
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p className="fs-4">Our Facilities</p>
                      <ul className="list-unstyled">
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Resturant
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          bar
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Pick-up
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Swimming Pool
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Spa
                        </li>
                        <li className="mt-1" style={{ color: "#ff5422" }}>
                          Gym
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <p className="fs-4">Subscribe</p>
                  <p>
                    Sed cursus ut nibh in semper. Mauris varius et magna in
                    fermentum.
                  </p>
                  <div className="input-group" style={{ borderRadius: "0px" }}>
                    <input
                      className="form-control"
                      style={{ borderRadius: "0px" }}
                      type="text"
                      name=""
                      id=""
                    />
                    <button
                      className="btn text-white"
                      style={{
                        backgroundColor: "rgb(60, 65, 70)",
                        borderRadius: "0px",
                      }}
                    >
                      button
                    </button>
                  </div>
                </div>
                <div className="col-md-3  ">
                  <i
                    style={{ color: "#b3b3b3" }}
                    className="fa-brands fa-twitter fs-3 mt-3 mx-1"
                  ></i>
                  <i
                    style={{ color: "#b3b3b3" }}
                    className="fa-brands fa-facebook fs-3 mt-3 mx-1"
                  ></i>
                  <i
                    style={{ color: "#b3b3b3" }}
                    className="fa-brands fa-instagram fs-3 mt-3 mx-1"
                  ></i>
                  <i
                    style={{ color: "#b3b3b3" }}
                    className="fa-brands fa-linkedin fs-3 mt-3 mx-1"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
