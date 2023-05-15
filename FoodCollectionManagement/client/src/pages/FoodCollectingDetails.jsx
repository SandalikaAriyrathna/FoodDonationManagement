import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useNavigate, Link } from 'react-router-dom';
import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function FoodCollectingDetails() {
  const rowColors = ['white', '#ffe682'];
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {
    setFilteredData(
      data.filter((row) =>
        row.date.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, data]);

  const getdata = () => {
    axios
      .get('http://localhost:5000/api/foodCollection/')

      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (delivery_id) => {
    // handle edit button click
    navigate(`/updateFoodCollectingDetails/${delivery_id}`);
  };

  const handleDelete = (delivery_id) => {
    axios
      .delete(`http://localhost:5000/api/foodCollection/delete/${delivery_id}`)
      .then((res) => {
        // refresh the data
        getdata();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />

      <div className="d-flex justify-content-center">
        <div
          className="card text-center bg-gradient mt-5 mb-5 w-250"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            className="card-body"
            style={{ backgroundColor: '#F5F5DC', zIndex: '1', width: '100%' }}
          >
            <h1 className="card-title text-light">Food Collecting Details</h1>
            <br />

            <div className="d-flex justify-content-center">
              <div>
                <form>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search by date (e.g. yyyy-mm-dd)"
                    style={{ backgroundColor: '#FFBF00', width: '270px' }}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </form>
              </div>
            </div>
            <br />
            <MDBTable striped hover>
              <MDBTableHead style={{ backgroundColor: '#FFBF00' }}>
                <tr>
                  <th>Delivery ID</th>
                  <th>Delivery Name</th>
                  <th>Contact NO</th>
                  <th>Delivery email</th>
                  <th>Donor Name</th>
                  <th>Date</th>
                  <th>Orphanage Name</th>
                  <th>Location</th>
                  <th>Action</th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>
                {filteredData.map((row, index) => (
                  <tr
                    key={row.id}
                    style={{
                      backgroundColor: rowColors[index % rowColors.length],
                    }}
                  >
                    <td>{row.delivery_id}</td>
                    <td>{row.deliver_name}</td>
                    <td>{row.contact}</td>
                    <td>{row.deliver_email}</td>
                    <td>{row.donor_name}</td>
                    <td>{row.date}</td>
                    <td>{row.orphanage_name}</td>
                    <td>{row.location}</td>
                    <td>
                      <MDBBtn
                        className="me-2"
                        style={{
                          padding: '0.25rem 0.5rem',
                          fontSize: '0.75rem',
                          borderRadius: '0.3rem',
                          width: '70px',
                        }}
                        color="info"
                        size="sm"
                        onClick={() => handleEdit(row.delivery_id)}
                      >
                        Update
                      </MDBBtn>
                      <MDBBtn
                        style={{
                          padding: '0.25rem 0.5rem',
                          fontSize: '0.75rem',
                          borderRadius: '0.3rem',
                          width: '70px',
                        }}
                        color="danger"
                        size="sm"
                        onClick={() => handleDelete(row.delivery_id)}
                      >
                        Delete
                      </MDBBtn>
                    </td>
                  </tr>
                ))}
              </MDBTableBody>
            </MDBTable>

            <br />
            <Link
              to="/addFoodCollectingDetails"
              className="btn btn me-5"
              style={{
                backgroundColor: 'black',
                width: '200px',
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              Insert
            </Link>
            <Link
              to="/"
              className="btn btn"
              style={{
                backgroundColor: 'black',
                width: '200px',
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              Back
            </Link>
            <br />
            <br />
            <Link
              to="#"
              className="btn btn me-5"
              style={{
                backgroundColor: 'black',
                width: '200px',
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              Generate Report
            </Link>
            <Link
              to="#"
              className="btn btn"
              style={{
                backgroundColor: 'black',
                width: '200px',
                color: 'white',
                textTransform: 'capitalize',
              }}
            >
              Search
            </Link>

            <div
              style={{
                position: 'absolute',
                top: '-250px',
                right: '-150px',
                width: '950px',
                height: '650px',
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
                height: '400px',
                borderRadius: '100%',
                backgroundColor: '#FFBF00',
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
