import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <Header />

      <div className="d-flex justify-content-center">
        <div
          className="card text-center bg-gradient mt-5 mb-5 w-50"
          style={{
            position: 'relative',
            overflow: 'hidden',
            Width: '100%',
          }}
        >
          <div
            className="card-body"
            style={{ backgroundColor: '#FFBF00', Width: '1000px', zIndex: '1' }}
          >
            <h1 className="card-title text-light">Dashboard</h1>
            <br />
            <h5 className="card-text  text-light">
              Welcome orphanage member..!
            </h5>
            <br />
            <Link
              to="#"
              className="btn btn-lg"
              style={{
                backgroundColor: 'white',
                width: '300px',
                textTransform: 'capitalize',
                fontSize: '18px',
              }}
            >
              View My Profile
            </Link>
            <br />
            <br />
            <Link
              to="/foodCollectingDetails"
              className="btn btn-lg"
              style={{
                backgroundColor: 'white',
                width: '300px',
                textTransform: 'capitalize',
                fontSize: '18px',
              }}
            >
              Food Collecting Details
            </Link>
            <br />
            <br />
            <Link
              to="#"
              className="btn btn-lg"
              style={{
                backgroundColor: 'white',
                width: '300px',
                textTransform: 'capitalize',
                fontSize: '18px',
              }}
            >
              Generate Reports
            </Link>
            <br />
            <br />
            <Link
              to="#"
              className="btn btn"
              style={{
                backgroundColor: 'black',
                width: '220px',
                color: 'white',
                textTransform: 'capitalize',
                fontSize: '18px',
              }}
            >
              Logout
            </Link>

            <div
              style={{
                position: 'absolute',
                top: '-250px',
                right: '-150px',
                width: '700px',
                height: '550px',
                borderRadius: '100%',
                backgroundColor: '#93C572',
                opacity: '1',
                zIndex: '-1',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                bottom: '-60px',
                right: '-100px',
                width: '500px',
                height: '300px',
                borderRadius: '100%',
                backgroundColor: '#F5F5DC',
                opacity: '1',
                zIndex: '-2',
              }}
            ></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
