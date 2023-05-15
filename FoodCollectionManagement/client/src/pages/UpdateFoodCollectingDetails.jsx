import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function UpdateFoodCollectingDetails() {
  const params = useParams();

  const [delivery_id, setDeliveryId] = useState('');
  const [deliver_name, setDeliveryName] = useState('');
  const [contact, setContact] = useState('');
  const [deliver_email, setDeliveryEmail] = useState('');
  const [donor_name, setDonarName] = useState('');
  const [date, setDate] = useState('');
  const [orphanage_name, setOrphanageName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/foodCollection/${params.delivery_id}`)
      .then((res) => {
        console.log(res);
        setDeliveryId(res.data.delivery_id);
        setDeliveryName(res.data.deliver_name);
        setContact(res.data.contact);
        setDeliveryEmail(res.data.deliver_email);
        setDonarName(res.data.donor_name);
        setDate(res.data.date);
        setOrphanageName(res.data.orphanage_name);
        setLocation(res.data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const FoodCollectData = {
      delivery_id,
      deliver_name,
      contact,
      deliver_email,
      donor_name,
      date,
      orphanage_name,
      location,
    };

    // Validation

    if (
      deliver_name.length === 0 ||
      contact.length === 0 ||
      deliver_email.length === 0 ||
      donor_name.length === 0 ||
      date.length === 0 ||
      orphanage_name.length === 0 ||
      location.length === 0
    ) {
      swal(' Fields Cannot empty !', 'Please enter all data !', 'error');
    } else {
      console.log(FoodCollectData);
      axios
        .put(
          `http://localhost:5000/api/foodCollection/update/${params.delivery_id}`,
          FoodCollectData
        )
        .then(function (response) {
          console.log(response.data);
          setDeliveryId('');
          setDeliveryName('');
          setContact('');
          setDeliveryEmail('');
          setDonarName('');
          setDate('');
          setOrphanageName('');
          setLocation('');

          swal({
            text: 'Successfully Updated',
            icon: 'success',
            button: 'Okay!',
          }).then((value) => {
            window.location = '/foodCollectingDetails';
          });
        })
        .catch(function (error) {
          console.log(error);
        });

      swal({
        text: 'Successfully Added',
        icon: 'success',
        button: 'Okay!',
      }).then((value) => {
        window.location = '/foodCollectingDetails' + delivery_id;
      });
    }
  }

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
            style={{ backgroundColor: '#F5F5DC', Width: '800px', zIndex: '1' }}
          >
            <h1 className="card-title text-light">
              Update Food Collect Details
            </h1>
            <br />
            <br />
            <div className="d-flex justify-content-center">
              <form onSubmit={handleSubmit}>
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="deliver_name"
                  >
                    Delivery ID:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="text"
                    id="deliver_id"
                    value={delivery_id}
                    onChange={(e) => setDeliveryName(e.target.value)}
                    disabled
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="deliver_name"
                  >
                    Delivery Name:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="text"
                    id="deliver_name"
                    value={deliver_name}
                    onChange={(e) => setDeliveryName(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="contact"
                  >
                    Contact Number:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="text"
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="email"
                  >
                    Delivery Email:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="email"
                    id="email"
                    value={deliver_email}
                    onChange={(e) => setDeliveryEmail(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="donor_name"
                  >
                    Donor's Name:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="text"
                    id="donor_name"
                    value={donor_name}
                    onChange={(e) => setDonarName(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="date"
                  >
                    Date of Colleting Food:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="orphanage_name"
                  >
                    Orphanage Name:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="text"
                    id="orphanage_name"
                    value={orphanage_name}
                    onChange={(e) => setOrphanageName(e.target.value)}
                  />
                </div>

                <br />
                <br />
                <div>
                  <label
                    className="float-start font-weight-bold fs-5"
                    htmlFor="location"
                  >
                    Location:
                  </label>
                  <input
                    className="form-control w-50 float-end"
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <br />
                <br />

                <br />
                <br />
                <Link
                  to="/foodCollectingDetails"
                  className="btn btn me-5"
                  style={{
                    backgroundColor: 'black',
                    width: '250px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                >
                  Back
                </Link>
                <button
                  type="submit"
                  className="btn btn"
                  style={{
                    backgroundColor: 'black',
                    width: '250px',
                    color: 'white',
                    textTransform: 'capitalize',
                  }}
                >
                  Update
                </button>
              </form>
            </div>
            <div
              style={{
                position: 'absolute',
                top: '-250px',
                right: '-150px',
                width: '860px',
                height: '650px',
                borderRadius: '100%',
                backgroundColor: '#FFBF00',
                opacity: '1',
                zIndex: '-1',
              }}
            ></div>
            <div
              style={{
                position: 'absolute',
                bottom: '-60px',
                right: '-100px',
                width: '600px',
                height: '500px',
                borderRadius: '100%',
                backgroundColor: '#93C572',
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
