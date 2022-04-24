import { useState, useEffect } from "react";

const SingleTicket = () => {
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
    if (
      !personalDetails.email ||
      !personalDetails.name ||
      !personalDetails.surname ||
      !personalDetails.addressLine1 ||
      !personalDetails.city ||
      !personalDetails.postCode
    ) {
      alert("Please fill all the details in order to proceed");
      e.preventDefault();
      return false;
    }
  };

  function handleChange(e) {
    setPersonalDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  return (
    <form method="post" action="/api/tickets" className="info-container-no-anim container" onSubmit={handleSendToCheckout}>
      <h1>Buy single tickets</h1>
      <p className="golder">
        Attention! If you experience problems with the payments, please contact
        us on <b>contact@glendowerpa.uk</b> providing the number of tickets you
        purchased and last four digits of your card.
      </p>
      <div className="row justify-content-around mt-4">
        <div className="col-lg-5">
          <h2>Your details</h2>
          <div className="container px-0 px-lg-5 my-3">
              <div className="form-floating mb-3">
                <input
                  className="form-control formka"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  data-sb-validations="required,email"
                  value={personalDetails.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email Address</label>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:required"
                >
                  Email Address is required.
                </div>
                <div
                  className="invalid-feedback"
                  data-sb-feedback="email:email"
                >
                  Email Address Email is not valid.
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  autoComplete="given-name"
                  className="form-control"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  data-sb-validations="required"
                  value={personalDetails.name}
                  onChange={handleChange}
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
                  autoComplete="family-name"
                  className="form-control"
                  id="surname"
                  name="surname"
                  type="text"
                  placeholder="Surname"
                  data-sb-validations="required"
                  value={personalDetails.surname}
                  onChange={handleChange}
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
                  autoComplete="address-line1"
                  className="form-control"
                  id="addressLine1"
                  name="addressLine1"
                  type="text"
                  placeholder="Address line 1"
                  data-sb-validations="required"
                  value={personalDetails.addressLine1}
                  onChange={handleChange}
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
                  autoComplete="address-line2"
                  className="form-control"
                  id="addressLine2"
                  name="addressLine2"
                  type="text"
                  placeholder="Address line 2"
                  data-sb-validations="required"
                  value={personalDetails.addressLine2}
                  onChange={handleChange}
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
                  name="postCode"
                  type="text"
                  placeholder="Post Code"
                  data-sb-validations="required"
                  value={personalDetails.postCode}
                  onChange={handleChange}
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
                  name="city"
                  type="text"
                  placeholder="City"
                  data-sb-validations="required"
                  value={personalDetails.city}
                  onChange={handleChange}
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
            <button type="submit" className="buttonka">
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
                        // setPrice((price -= 1));
                      }}
                    >
                      Remove
                    </span>
                  )}
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

                    {!ticket.teacher && (
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="fullName"
                          name="fullName"
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
                    )}

                    {!ticket.teacher && (
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="tablePreference"
                          name="tablePreference"
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
                            }; //execute the  manipulations
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
                    )}
                    {!ticket.teacher && (
                      <div className="form-floating mb-3">
                        <input
                          className="form-control"
                          id="dietaryRequirements"
                          name="dietaryRequirements"
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
                    )}
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
              onClick={e => {
                e.preventDefault();
                const newTicket = {
                  fullName: "",
                  tableName: "",
                  diet: "",
                };
                setSingleTickets((prevka) => {
                  const belijka = [...prevka, newTicket];
                  return belijka;
                });
                setPrice((price += 175));
                // setPrice((price += 1));
              }}
              className="buttonka"
              disabled={singleTickets.length >= 9 && true}
            >
              Add a ticket
            </button>
          </div>
        </div>
      </div>
      <input name="price" type="hidden" value={price} />
      <input name="tickets" type="hidden" value={JSON.stringify(singleTickets)} />
    </form>
  );
};

export default SingleTicket;
