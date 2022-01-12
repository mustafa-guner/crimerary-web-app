import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Forms.css";
import EmailWrapper from "../../components/Admin/layout/EmailWrapper";
import EmailListItem from "../../components/Admin/layout/EmailListItem";
import { getForms, rejectForm } from "../../redux/actions/form";
import { connect } from "react-redux";
import { createMissingPerson } from "../../redux/actions/missingPerson";
import noData from "../../images/no data.svg";

const Forms = ({
  forms: { forms, loading },
  getForms,
  createMissingPerson,
  rejectForm,
}) => {
  useEffect(() => {
    getForms();
  }, [getForms, rejectForm]);

  const [currentForm, setCurrentForm] = useState({});

  const handleChangeForm = (form) => {
    setCurrentForm({ ...currentForm, ...form });
  };

  return (
    <>
      <div className="email-app card-margin">
        <div className="email-list-wrapper">
          <div
            id="email-app-body"
            className="email-list-scroll-container ps ps--active-y"
          >
            <h4 className="my-2">Received Forms</h4>
            <ul className="email-list">
              {loading ? (
                <div className="text-center mx-auto">
                  <div className="spinner-border text-center" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              ) : (
                forms.length > 0 &&
                forms.map((form) => {
                  return (
                    <EmailListItem
                      handleChange={() => handleChangeForm(form)}
                      key={form._id}
                      form={form}
                    />
                  );
                })
              )}
            </ul>
          </div>
        </div>
        {Object.keys(currentForm).length > 0 && (
          <EmailWrapper
            createNewMissingPerson={createMissingPerson}
            rejectForm={rejectForm}
            currentForm={currentForm}
          />
        )}
      </div>
    </>
  );
};

Forms.propTypes = {};

const mapStateToProps = (state) => ({
  forms: state.form,
});

export default connect(mapStateToProps, {
  getForms,
  createMissingPerson,
  rejectForm,
})(Forms);
