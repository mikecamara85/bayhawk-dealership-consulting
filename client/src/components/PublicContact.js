import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

export const PublicContact = () => {
  const history = useHistory();

  const sendPublicEmail = (e) => {
    // do stuff
    alert("success!");
    history.push("/");
  };

  return (
    //
    <div className="d-flex flex-column justify-content-around align-items-center full-view m-3">
      <p className="xl-text dark-blue-text m-3">Contact Us!</p>

      <p className="dim-grey-text large-text m-3">
        If you have any questions about what we can do for you, please call us
        at
      </p>
      <p className="xl-text dark-blue-text m-3">774-930-5640</p>
      <p className="large-text m-3">or</p>
      <textarea
        className="public-contact-container large-text dark-blue-text m-3 p-3"
        placeholder="Send us an e-mail!"
        // ref={emailBodyRef}
        // onChange={checkValid}
      ></textarea>
      <textarea
        className="public-contact-container public-contact-container-short large-text dark-blue-text m-3 p-3"
        placeholder="email address and/or phone #"
        // ref={contactInfoRef}
        // onChange={checkValid}
      ></textarea>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="button-primary large-text m-3"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </button>
        <button
          className="button-primary large-text m-3"
          onClick={sendPublicEmail}
        >
          Send
        </button>
      </div>

      <div className="border-section"></div>
      <div className="border-section"></div>
    </div>
  );
};

export default PublicContact;
