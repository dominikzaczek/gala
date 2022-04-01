import { useState, useEffect } from "react";
import { useRouter } from "next/router";
const SingleTicket = ({ props }) => {
  const router = useRouter();
  const [singleTickets, setSingleTickets] = useState([
    {
      fullName: "",
      tableName: "",
      diet: "",
      teacher: false,
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

  const [price, setPrice] = useState(175);

  useEffect(() => {}, []);
  const handleSendToCheckout = (e) => {
    e.preventDefault();
    const order = {
      tickets: singleTickets,
      details: personalDetails,
      price,
      fullTable: false,
    };

    const stringified = JSON.stringify(order);

    const string_encoded = encodeURIComponent(stringified);
    console.log(string_encoded);
    const urlka = "/tickets/ticketero?q=" + string_encoded;
    router.push(urlka);
  };
  return (
    <div className="info-container-no-anim container">
      <h1>Buy single tickets</h1>
      <div className="row justify-content-around mt-4">
        <div className="col-lg-5">
          <h2>Your details</h2>
          <div className="container px-0 px-lg-5 my-3">
            <form id="contactForm" action="./checkoutero">
              <div className="form-floating mb-3">
                <input
                  className="form-control formka"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
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
            </form>
          </div>
          <div className="d-flex justify-content-between">
            <h1>&pound; {price && price}</h1>
            <button onClick={handleSendToCheckout} className="buttonka">
              Buy the tickets
            </button>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <h2 className="mt-5">Tickets and details</h2>
          {singleTickets.length > 0 &&
            singleTickets.map((ticket, key) => {
              return (
                <div className="container px-0 px-lg-5 my-3" key={key}>
                  <h3 className="golder">
                    {singleTickets[key].name
                      ? singleTickets[key].name
                      : `Person ${key + 1}`}
                  </h3>
                  {key === 0 ? null : (
                    <span
                      className="golder-btn"
                      onClick={() => {
                        const ticketsy = singleTickets;
                        ticketsy.splice(key, 1);
                        setSingleTickets(ticketsy);
                        setPrice((price -= 175));
                      }}
                    >
                      Remove
                    </span>
                  )}
                  <form id="singlePersonForm">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={ticket.teacher}
                        id="flexCheckDefault"
                        onChange={(e) => {
                          const newIds = singleTickets.slice(); //copy the array
                          newIds[key] = {
                            fullName: ticket.fullName,
                            tableName: ticket.tableName,
                            diet: ticket.diet,
                            teacher: !ticket.teacher,
                          }; //execute the manipulations
                          setSingleTickets(newIds);
                        }}
                      />
                      <label
                        className="form-check-label golder"
                        htmlFor="flexCheckDefault"
                      >
                        I am buying this ticket for a teacher
                      </label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
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
                            teacher: ticket.teacher,
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
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="tablePreference"
                        type="text"
                        placeholder="Table preference / Year?"
                        data-sb-validations="required"
                        onChange={(e) => {
                          const newIds = singleTickets.slice(); //copy the array
                          newIds[key] = {
                            fullName: ticket.fullName,
                            tableName: e.target.value,
                            diet: ticket.diet,
                            teacher: ticket.teacher,
                          }; //execute the manipulations
                          setSingleTickets(newIds);
                        }}
                      />
                      <label htmlFor="tablePreference">
                        Table preference / Year
                      </label>
                      <div
                        className="invalid-feedback"
                        data-sb-feedback="tablePreference:required"
                      >
                        Table preference? is required.
                      </div>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
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
                            teacher: ticket.teacher,
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
                  </form>
                </div>
              );
            })}
          {singleTickets.length >= 9 && (
            <p className="golder">
              You can buy maximum 9 tickets per single purchase. You may want to
              consider buying a table.
            </p>
          )}
          <div className="row justify-content-end px-5">
            <button
              onClick={() => {
                const newTicket = {
                  fullName: "",
                  tableName: "",
                  diet: "",
                };
                setSingleTickets((prevka) => {
                  const belijka = [...prevka, newTicket];
                  return belijka;
                });
                console.log(singleTickets);
                setPrice((price += 175));
              }}
              className="buttonka"
              disabled={singleTickets.length >= 9 && true}
            >
              Add a ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
