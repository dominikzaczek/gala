import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const TableTicket = ({ props }) => {
  const router = useRouter();
  const [singleTickets, setSingleTickets] = useState([
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
    {
      fullName: "",
      diet: "",
    },
  ]);
  const [personalDetails, setPersonalDetails] = useState({
    email: "",
    name: "",
    surname: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    postCode: "",
  });

  const [price, setPrice] = useState(1750);
  const [tableName, setTableName] = useState("");
  const handleSendToCheckout = (e) => {
    e.preventDefault();
    const check_personalDetails = Object.keys(personalDetails).every(
      (x, key) => personalDetails[x] !== ""
    );

    if (!check_personalDetails) {
      alert("Halo, all of those fields are required!");
      return;
    }

    if (tableName === "") {
      alert("Please provide the table name");
      return;
    }

    const order = {
      tickets: singleTickets,
      details: personalDetails,
      fullTable: true,
      tableName: tableName,
      price,
    };

    const stringified = JSON.stringify(order);

    const string_encoded = encodeURIComponent(stringified);
    console.log(string_encoded);
    const urlka = "/tickets/ticketero?q=" + string_encoded;
    router.push(urlka);
  };
  return (
    <div className="info-container-no-anim container">
      <form id="contactForm" action="./checkoutero">
        <h1>Buy a table</h1>
        <div className="row justify-content-around mt-4">
          <div className="col-12 col-lg-4">
            <h2>Your details</h2>
            <div className="container px-0 px-lg-5 my-3">
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm formka"
                  id="emailAddress"
                  type="email"
                  placeholder="Email Address"
                  data-sb-validations="required,email"
                  value={personalDetails.email}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                  required
                />
                <label htmlFor="emailAddress">Email Address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="emailAddress:required"
                >
                  Email Address is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="emailAddress:email"
                >
                  Email Address Email is not valid.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm"
                  id="name"
                  type="text"
                  placeholder="Name"
                  data-sb-validations="required"
                  value={personalDetails.name}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                />
                <label htmlFor="name">Name</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="name:required"
                >
                  Name is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm"
                  id="surname"
                  type="text"
                  placeholder="Surname"
                  data-sb-validations="required"
                  value={personalDetails.surname}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      surname: e.target.value,
                    }));
                  }}
                />
                <label htmlFor="surname">Surname</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="surname:required"
                >
                  Surname is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm"
                  id="addressLine1"
                  type="text"
                  placeholder="Address line 1"
                  data-sb-validations="required"
                  value={personalDetails.addressLine1}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      addressLine1: e.target.value,
                    }));
                  }}
                />
                <label htmlFor="addressLine1">Address line 1</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="addressLine1:required"
                >
                  Address line 1 is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm"
                  id="addressLine2"
                  type="text"
                  placeholder="Address line 2"
                  data-sb-validations="required"
                  value={personalDetails.addressLine2}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      addressLine2: e.target.value,
                    }));
                  }}
                />
                <label htmlFor="addressLine2">Address line 2</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="addressLine2:required"
                >
                  Address line 2 is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm"
                  id="postCode"
                  type="text"
                  placeholder="Post Code"
                  data-sb-validations="required"
                  value={personalDetails.postCode}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      postCode: e.target.value,
                    }));
                  }}
                />
                <label htmlFor="postCode">Post Code</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="postCode:required"
                >
                  Post Code is required.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  className="form-control form-control-sm"
                  id="city"
                  type="text"
                  placeholder="City"
                  data-sb-validations="required"
                  value={personalDetails.city}
                  onChange={(e) => {
                    setPersonalDetails((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }));
                  }}
                />
                <label htmlFor="city">City</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="city:required"
                >
                  City is required.
                </div>
              </div>

              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <div className="d-grid"></div>
            </div>
            <div className="d-flex justify-content-between">
              <h1>&pound; {price && price}</h1>
              <button className="buttonka" onClick={handleSendToCheckout}>
                Buy the tickets
              </button>
            </div>
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0">
            <h2>Name your table</h2>
            <div className="row px-3 px-lg-5 my-3">
              <input
                className="form-control form-control"
                onChange={(e) => {
                  setTableName(e.target.value);
                }}
                value={tableName}
                placeholder="Your table name"
              />
            </div>
            <h2 className=" mt-4 mt-lg-0">List of attendees</h2>
            {singleTickets.length > 0 &&
              singleTickets.map((ticket, key) => {
                return (
                  <div className="container px-0 px-lg-5 my-3" key={key}>
                    <h4 className="golder">Person {key + 1}</h4>
                    <form id="singlePersonForm">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-floating mb-3">
                            <input
                              className="form-control form-control-sm"
                              id="fullName"
                              type="text"
                              placeholder="Full name"
                              value={ticket.fullName}
                              data-sb-validations="required"
                              onChange={(e) => {
                                const newIds = singleTickets.slice(); //copy the array
                                newIds[key] = {
                                  fullName: e.target.value,
                                  tableName: ticket.tableName,
                                  diet: ticket.diet,
                                }; //execute the manipulations
                                setSingleTickets(newIds);
                              }}
                            />
                            <label htmlFor="fullName">Full name</label>
                            <div
                              className="invalid-feedback"
                              data-sb-feedback="fullName:required"
                            >
                              Full name is required.
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-floating mb-3">
                            <input
                              className="form-control form-control-sm"
                              id="dietaryRequirements"
                              type="text"
                              placeholder="Dietary requirements"
                              data-sb-validations="required"
                              onChange={(e) => {
                                const newIds = singleTickets.slice(); //copy the array
                                newIds[key] = {
                                  fullName: ticket.fullName,
                                  tableName: ticket.tableName,
                                  diet: e.target.value,
                                }; //execute the manipulations
                                setSingleTickets(newIds);
                              }}
                            />
                            <label htmlFor="dietaryRequirements">
                              Dietary requirements
                            </label>
                            <div
                              className="invalid-feedback"
                              data-sb-feedback="dietaryRequirements:required"
                            >
                              Dietary requirements is required.
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                );
              })}
          </div>
        </div>
      </form>
    </div>
  );
};

export default TableTicket;
