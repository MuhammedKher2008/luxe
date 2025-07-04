import React from "react";
import carousel1 from "./image/valeriia-bugaiova-_pPHgeHz1uk-unsplash.jpg";
import carousel2 from "./image/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg";
import carousel3 from "./image/francesca-saraco-_dS27XGgRyQ-unsplash.jpg";
import otelroom from "./image/otelroomphoto.jpg";
import otelroom2 from "./image/nik-lanus-YMOHw3F1Hdk-unsplash.jpg";
import otelroom3 from "./image/emil-widlund-t0V7-RMQDgY-unsplash.jpg";
import meat from "./image/tab_img_1.jpg";
import plaj1 from "./image/alexander-videnov-2-cvrZDeKnw-unsplash.jpg";
import plaj2 from "./image/francesco-d-ascenzo-NjFqlmjNJ-o-unsplash.jpg";
import plaj3 from "./image/mp-fV2dM2WvKvE-unsplash.jpg";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div
              data-bs-interval="3000"
              className="carousel slide"
              id="carouselTextImage"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={carousel1}
                    className="d-block w-100 img-fluid"
                    alt=""
                  />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 text-start">
                    <p className="fs-3">Luxe Hotel.</p>
                    <h4 className="display-4">
                      A Best Place To Enjoy Your Life .
                    </h4>
                    <a
                      style={{ backgroundColor: "#FF5722" }}
                      href="#"
                      className="btn rounded-5 text-white btn-lg "
                    >
                      {" "}
                      read more
                    </a>
                    <div className="container  ">
                      <div className="row justify-content-center mt-2">
                        <div
                          style={{ backgroundColor: "#ff5722" }}
                          className="col-md-6 gap-2 d-flex 
                         justify-content-betw leen "
                        >
                          <select
                            style={{
                              border: "1px solid rgb(204, 203, 203) ",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control   text-white"
                            name=""
                            id=""
                          >
                            <option value="">luxe hotel</option>
                            <option value="">deluxe hotel</option>
                            <option value=""> five star hotel</option>
                          </select>
                          <label className="" htmlFor="">
                            chek in{" "}
                          </label>
                          <input
                            style={{
                              border: "1px solid rgb(204, 203, 203)",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2  w-25 text-white"
                            type="date"
                          />
                          <label className="" htmlFor="">
                            chek out
                          </label>
                          <input
                            style={{
                              border: "1px solid rgb(204, 203, 203)  ",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2 w-25 text-white"
                            type="date"
                            name=""
                            id=""
                          />
                          <a
                            style={{ backgroundColor: "#3c4146" }}
                            className="btn text-white border-none px-2 py-2 text-decoration-none"
                          >
                            Check Availability
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={carousel2} className="d-block w-100 " alt="" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 text-start">
                    <p className="fs-3">Bora Hotel.</p>
                    <h4 className="display-4">
                      Reserve Room for Family Vacation
                    </h4>
                    <a
                      style={{ backgroundColor: "#FF5722" }}
                      href="#"
                      className="btn rounded-5 text-white btn-lg"
                    >
                      {" "}
                      read more
                    </a>
                    <div className="container  mt-5">
                      <div className="row justify-content-center my-2">
                        <div
                          style={{ backgroundColor: "#ff5722" }}
                          className="col-md-6 gap-2 d-flex 
                         justify-content-betw leen "
                        >
                          <select
                            style={{
                              border: "1px solid rgb(204, 203, 203) ",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2  text-white"
                            name=""
                            id=""
                          >
                            <option value="">luxe hotel</option>
                            <option value="">deluxe hotel</option>
                            <option value=""> five star hotel</option>
                          </select>
                          <label className="" htmlFor="">
                            chek in{" "}
                          </label>
                          <input
                            style={{
                              border: "1px solid rgb(204, 203, 203)",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2  w-25 text-white"
                            type="date"
                          />
                          <label className="" htmlFor="">
                            chek out
                          </label>
                          <input
                            style={{
                              border: "1px solid rgb(204, 203, 203)  ",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2 w-25 text-white"
                            type="date"
                            name=""
                            id=""
                          />
                          <a
                            style={{ backgroundColor: "#3c4146" }}
                            className="btn text-white border-none px-2 py-2 text-decoration-none"
                          >
                            Check Availability
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={carousel3} className="d-block w-100 " alt="" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center h-100 text-start">
                    <p className="fs-3">Deluxe Hotel.</p>
                    <h4 className="display-4">
                      Make Your Vacation Comfortable.
                    </h4>
                    <a
                      style={{ backgroundColor: "#FF5722" }}
                      href="#"
                      className="btn rounded-5 text-white btn-lg"
                    >
                      {" "}
                      read more
                    </a>

                    <div className="container  mt-5">
                      <div className="row justify-content-center my-2">
                        <div
                          style={{ backgroundColor: "#ff5722" }}
                          className="col-md-6 gap-2 d-flex 
                         justify-content-betw leen "
                        >
                          <select
                            style={{
                              border: "1px solid rgb(204, 203, 203) ",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2  text-white"
                            name=""
                            id=""
                          >
                            <option value="">luxe hotel</option>
                            <option value="">deluxe hotel</option>
                            <option value=""> five star hotel</option>
                          </select>
                          <label className="" htmlFor="">
                            chek in{" "}
                          </label>
                          <input
                            style={{
                              border: "1px solid rgb(204, 203, 203)",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2  w-25 text-white"
                            type="date"
                          />
                          <label className="" htmlFor="">
                            chek out
                          </label>
                          <input
                            style={{
                              border: "1px solid rgb(204, 203, 203)  ",
                              backgroundColor: "#ff5722",
                              borderRadius: "0px",
                            }}
                            className="form-control my-2 w-25 text-white"
                            type="date"
                            name=""
                            id=""
                          />
                          <a
                            style={{ backgroundColor: "#3c4146" }}
                            className="btn text-white border-none px-2 py-2 text-decoration-none"
                          >
                            Check Availability
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselTextImage"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselTextImage"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-2 my-5 ">
            <h4 className="text-center fs-2 " style={{ color: "#3c4146" }}>
              20356
            </h4>
            <p className="text-center">User Access</p>
          </div>
          <div className="col-md-2 my-5 ">
            <h4 className="text-center fs-2" style={{ color: "#3c4146" }}>
              20356
            </h4>
            <p className="text-center">Hotels</p>
          </div>
          <div className="col-md-2 my-5 ">
            <h4 className="text-center fs-2" style={{ color: "#3c4146" }}>
              20356
            </h4>
            <p className="text-center">Transactions</p>
          </div>
          <div className="col-md-2 my-5 ">
            <h4 className="text-center fs-2" style={{ color: "#3c4146" }}>
              20356
            </h4>
            <p className="text-center ">Rating & Review</p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            style={{ backgroundColor: "rgb(230, 230, 230)" }}
            className="col-md-12"
          >
            <h3
              style={{ fontWeight: "300", letterSpacing: "2px" }}
              className="text-center p-5"
            >
              Featured Hotels
            </h3>
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-md-10">
                  <div
                    style={{ borderRadius: "0px", border: "none" }}
                    className="card "
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img
                          className="img-fluid h-100"
                          src={otelroom}
                          alt=""
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title ps-4 pt-3">Deluxe Hotel</h5>
                          <p
                            style={{ fontSize: "18px", color: "#3c4146" }}
                            className="card-text ps-4 pt-3"
                          >
                            Pellentesque habitant morbi tristique senectus et
                            netus ett mauada fames ac turpis egestas. Etiam
                            euismod tempor leo, in suscipit urna condimentum
                            sed. Vivamus augue enim, consectetur ac interdum a,
                            pulvinar ac massa. Nullam malesuada congue
                          </p>
                          <a
                            className="btn text-white ms-4"
                            style={{
                              borderRadius: "none",
                              backgroundColor: "#3c4146",
                            }}
                            href="#"
                          >
                            booknow
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row mt-5 justify-content-center">
                <div className="col-md-5">
                  <div
                    style={{ borderRadius: "0px", border: "none" }}
                    className="card "
                  >
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title ps-4 pt-3">Hotel Bora</h5>
                          <p
                            style={{ fontSize: "18px", color: "#3c4146" }}
                            className="card-text ps-4 pt-3"
                          >
                            Pellentesque habitant morbi tristique senectus et
                            netus ett mauada fames ac turpis egestas. Etiam
                            euismod tempor leo, in suscipit urna condimentum
                            sed. Vivamus augue enim, consectetur ac interdum a,
                            pulvinar ac massa. Nullam malesuada congue
                          </p>
                          <a
                            className="btn text-white ms-4"
                            style={{
                              borderRadius: "none",
                              backgroundColor: "#3c4146",
                            }}
                            href="#"
                          >
                            booknow
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="img-fluid h-100"
                          src={otelroom2}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 mb-5">
                  <div
                    style={{ borderRadius: "0px", border: "none" }}
                    className="card "
                  >
                    <div className="row g-0">
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title ps-4 pt-3">D’Morvie</h5>
                          <p
                            style={{ fontSize: "18px", color: "#3c4146" }}
                            className="card-text ps-4 pt-3"
                          >
                            Pellentesque habitant morbi tristique senectus et
                            netus ett mauada fames ac turpis egestas. Etiam
                            euismod tempor leo, in suscipit urna condimentum
                            sed. Vivamus augue enim, consectetur ac interdum a,
                            pulvinar ac massa. Nullam malesuada congue
                          </p>
                          <a
                            className="btn text-white ms-4"
                            style={{
                              borderRadius: "none",
                              backgroundColor: "#3c4146",
                            }}
                            href="#"
                          >
                            booknow
                          </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <img
                          className="img-fluid h-100"
                          src={otelroom3}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h3
              style={{ fontWeight: "300", letterSpacing: "2px" }}
              className="text-center mt-5"
            >
              Hotel Facilities
            </h3>{" "}
            <div className="row  mt-5">
              <div
                style={{ color: "#ccc" }}
                className="col-md-2 fs-2 text-center"
              >
                <i className="fa-solid fa-utensils"></i>
                <h4 className="mt-3">restaurant</h4>
              </div>
              <div
                style={{ color: "#ccc" }}
                className="col-md-2 fs-2 text-center"
              >
                <i className="fa-solid fa-wine-bottle"></i>
                <h4 className="mt-3">bar</h4>
              </div>
              <div
                style={{ color: "#ccc" }}
                className="col-md-2 fs-2 text-center"
              >
                <i className="fa-solid fa-car"></i>
                <h4 className="mt-3">pick-up</h4>
              </div>
              <div
                style={{ color: "#ccc" }}
                className="col-md-2 fs-2 text-center"
              >
                <i className="fa-solid fa-person-swimming"></i>
                <h4 className="mt-3">swimming pool</h4>
              </div>
              <div
                style={{ color: "#ccc" }}
                className="col-md-2 fs-2 text-center"
              >
                <i className="fa-solid fa-spa"></i>
                <h4 className="mt-3">spa</h4>
              </div>
              <div
                style={{ color: "#ccc" }}
                className="col-md-2 fs-2 text-center"
              >
                <i className="fa-solid fa-dumbbell"></i>
                <h4 className="mt-3">gym</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-5">
            <img src={meat} className="img-fluid " alt="" />
          </div>
          <div className="col-md-5 ms-2">
            <span style={{ color: "#ccc" }}>world class</span>
            <h3 className="mt-4">Restaurant</h3>

            <p style={{ color: "##848484" }} className="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Molestias officia perferendis modi impedit, rem quasi veritatis.
              Consectetur obcaecati incidunt, quae rerum, accusamus sapiente
              fuga vero at. Quia, labore, reprehenderit illum dolorem quae
              facilis reiciendis quas similique totam sequi ducimus temporibus
              ex nemo, omnis perferendis earum fugit impedit molestias animi
              vitae.
            </p>

            <p style={{ color: "##848484" }} className="fs-5 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam neque blanditiis eveniet nesciunt, beatae similique
              doloribus, ex impedit rem officiis placeat dignissimos molestias
              temporibus, in! Minima quod, consequatur neque aliquam.
            </p>
            <span style={{ color: "#ccc" }} className="mt-3">
              Service Hours
            </span>
            <strong className="d-block  fs-5">7:30 AM - 8:00 PM</strong>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#ff5722" }}
        className="container-fluid pt-4"
      >
        <h3
          style={{ fontWeight: "300", letterSpacing: "2px", color: "#f8e69f" }}
          className="text-center "
        >
          Happy Customer Says...
        </h3>
        <div className="container mt-5">
          <div className="row justify-content-around">
            <div className="col-md-3 ">
              <div className="bg-light p-3">
                “If you’re looking for a top quality hotel look no further. We
                were upgraded free of charge to the Premium Suite, thanks so
                much”
              </div>
              <p
                style={{ color: "#f8e69f", fontSize: "1rem" }}
                className="mt-3"
              >
                john doe
              </p>
            </div>

            <div className="col-md-3 ">
              <div className="bg-light p-3">
                John Doe “Me and my wife had a delightful weekend get away here,
                the staff were so friendly and attentive. Highly Recommended”
              </div>
              <p
                style={{ color: "#f8e69f", fontSize: "1rem" }}
                className="mt-3"
              >
                Rob Smith
              </p>
            </div>

            <div className="col-md-3 ">
              <div className="bg-light p-3">
                “If you’re looking for a top quality hotel look no further. We
                were upgraded free of charge to the Premium Suite, thanks so
                much”
              </div>
              <p
                style={{ color: "#f8e69f", fontSize: "1rem" }}
                className="mt-3"
              >
                Jane Doe
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <h3
          style={{ fontWeight: "300", letterSpacing: "2px" }}
          className="text-center mt-5"
        >
          our blog
        </h3>
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
            <div className="col-md-3 ">
              <img src={plaj2} className="img-fluid" alt="" />
              <div
                className="card-footer "
                style={{ border: "1px solid #e6e6e6" }}
              >
                <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                  Most Expensive Hotel
                </p>
              </div>
            </div>
            <div className="col-md-3 ">
              <img src={plaj3} className="img-fluid" alt="" />
              <div
                className="card-footer "
                style={{ border: "1px solid #e6e6e6" }}
              >
                <p style={{ fontWeight: "600" }} className="fs-5 m-3 bg-white">
                  Most Expensive Hotel
                </p>
              </div>
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

export default Home;
