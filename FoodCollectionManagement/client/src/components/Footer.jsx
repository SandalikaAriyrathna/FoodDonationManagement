import React from 'react';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer
        className="text-lg-start text-muted text-light"
        style={{ backgroundColor: '#93C572' }}
      >
        <section className=" container p-4 text-light">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="text-start col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 d-flex align-items-center">
                <img
                  src="https://w7.pngwing.com/pngs/867/115/png-transparent-multicolored-five-holding-hands-illustration-self-help-group-business-logo-service-project-business-company-people-advertising.png"
                  height="100"
                  alt="logo"
                  loading="lazy"
                  className="me-3"
                />

                <div>
                  <h6 className="text-uppercase fw-bold mb-2">Saubhagya</h6>
                  <p className="m-0">"Food for Everyone"</p>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>Home</p>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Available Food List</p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>Donate Food</p>
                <p>Orphanage</p>
                <p>Food Collection</p>
                <p>Donate Grocery</p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-end">
                <p>Saubhagya</p>
                <p>Non-governmental organization</p>
                <p>66, new kandy road, malabe</p>
                <p>011 2-587-589</p>
                <p>info@soubhagyasocialservice.com</p>
              </div>
            </div>
          </div>
        </section>

        <section className="" style={{ backgroundColor: '#FFBF00' }}>
          <div className="d-flex justify-content-between align-items-center p-4 text-light">
            <div className="text-start ms-5">
              Copyright© 2023 :
              <a
                className="text-reset fw-bold ms-1 me-2 p-2"
                href="https://soubhagyasocialservice.com/"
              >
                Saubhagya
              </a>
              All Right Reserved
            </div>
            <div className="d-flex justify-content-end align-items-center me-5">
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-google"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="/" className="me-4 text-reset">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
