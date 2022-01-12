import React from "react";
import Moment from "react-moment";
const EmailWrapper = ({ currentForm, createNewMissingPerson }) => {
  console.log(currentForm);
  return (
    <div className="email-desc-wrapper h-100">
      <div className="email-header">
        <div className="email-date">
          <Moment format="YYYY/MM/DD">{currentForm.sendAt}</Moment>
        </div>
        <div className="email-subject">{currentForm.title}</div>
        <p className="recipient">
          <span>From:</span> {currentForm.senderName} &lt;
          {currentForm.senderEmail}&gt;
        </p>
      </div>
      <div className="email-body">
        {currentForm.title.includes("Existed") ? (
          <div className="row">
            <div className="col">
              <img src={currentForm.missingPerson.photo} alt="img" />
            </div>
            <div className="col">
              <h3>
                {currentForm.missingPerson.firstName}{" "}
                {currentForm.missingPerson.lastName}
              </h3>
              <h6 className="my-2">Last seen:</h6>{" "}
              <p>
                {" "}
                <span
                  style={{
                    textDecoration: "line-through",
                    textDecorationColor: "red",
                  }}
                  className="mr-2"
                >
                  {currentForm.missingPerson.lastSeenLocation}
                </span>
                <span className="font-weight-bold">
                  {currentForm.seenLocation}
                </span>
              </p>
              <h6 className="font-weight-bold">Sender's Note:</h6>
              <p>{currentForm.notes}</p>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col">
              <img src={currentForm.photo} alt="img" />
            </div>
            <div className="col">
              <h3>
                {currentForm.missingPersonName}{" "}
                {currentForm.missingPersonLastName}
              </h3>
              <h6 className="my-2">Missig From:</h6>{" "}
              <span>
                <Moment format="YYYY/MM/DD">
                  {currentForm.missingPersonMissingFromDate}
                </Moment>
              </span>
              <h6 className="my-2">Date Of Birth </h6>{" "}
              <span>
                <Moment format="YYYY/MM/DD">
                  {currentForm.missingPersonDob}
                </Moment>
              </span>
              <h6 className="my-2"> Last Location:</h6>{" "}
              <span>{currentForm.missingPersonLastLocation}</span>
              <h6 className="font-weight-bold my-2">Person Bio</h6>
              <p>{currentForm.missingPersonBio}</p>
              <h6 className="font-weight-bold my-2">Gender</h6>
              <p>{currentForm.missingPersonGender}</p>
            </div>
          </div>
        )}
      </div>

      {/* {!currentForm.title.includes("Existed") && (
        <div className="email-action">
          <button
            className="btn text-white"
            style={{ backgroundColor: "#DC2E32" }}
          >
            Reject
          </button>

          <button
            className="btn btn-dark text-white"
            onClick={() => {
              const formData = new FormData();
              formData.append("firstName", currentForm.missingPersonName);
              formData.append("lastName", currentForm.missingPersonLastName);
              formData.append("photo", currentForm.photo);
              formData.append(
                "fromDate",
                currentForm.missingPersonMissingFromDate
              );
              formData.append(
                "lastSeenLocation",
                currentForm.missingPersonLastLocation
              );

              formData.append("dob", currentForm.missingPersonDob);
              formData.append("gender", currentForm.missingPersonGender);
              formData.append("bio", currentForm.missingPersonBio);

              createNewMissingPerson(formData);
            }}
          >
            Confirm
          </button>
        </div>
      )} */}
    </div>
  );
};

export default EmailWrapper;
