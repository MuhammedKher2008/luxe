function Contact() {
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
              Contact Us
            </h1>
            <p style={{ fontWeight: "300" }} className="text-center text-white">
              Made with love by the fine folks at FreeHTML5.co
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row  mt-5">
          <div className="col-md-6">
            <div className="row">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103019.38695503495!2d37.23098561705392!3d36.20654492595732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152ff813b98135af%3A0x967e5e5fc542c32a!2z2K3ZhNio2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2str!4v1750867082460!5m2!1sar!2str"
                style={{ height: "50vh" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="col-md-6">
            <h3
              style={{ fontWeight: "300", fontSize: "30px" }}
              className="  mb-2"
            >
              Our Address
            </h3>
            <p style={{ fontSize: "18px", color: "#848484" }} className="mt-4">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="">
              <i style={{ color: "#848484" }} class="fa-solid fa-map "></i>
              <span style={{ color: "#848484" }} className="mx-2 ">
                198 West 21th Street, Suite 721 New York NY 10016
              </span>
            </div>
            <div className="">
              <i style={{ color: "#848484" }} class="fa-solid fa-phone "></i>
              <span style={{ color: "#848484" }} className="mx-2 ">
                + 1235 2355 98
              </span>
            </div>
            <div className="">
              <i style={{ color: "#848484" }} class="fa-solid fa-envelope "></i>
              <span style={{ color: "#848484" }} className="mx-2 ">
                info@yoursite.com
              </span>
            </div>
            <div className="">
              <i style={{ color: "#848484" }} class="fa-solid fa-house "></i>
              <span style={{ color: "#848484" }} className="mx-2 ">
                info@yoursite.com
              </span>
            </div>
            <div className="row mt-4">
              <div className="col-md-6">
                <input placeholder="name" type="text" className="form-control" name="" id="" />
              </div>
              <div className="col-md-6">
                <input placeholder="email" type="text" className="form-control" name="" id="" />
              </div>
            </div>
            <textarea className="form-control mt-3" rows={5} name="" id=""></textarea>
            <button style={{backgroundColor:"#ff5422"}} className="btn text-white rounded-0 mt-3">send message</button>
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

export default Contact;
