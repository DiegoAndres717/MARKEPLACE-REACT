import React from "react";
import "./CreateListing.css";

const CreateListing = () => {
  return (
    <div className="create-listing">
      <form className="create-listing-form">
        <div className="create-listing-form-group">
          <input
            autoFocus={true}
            type="text"
            placeholder="Property title"
            className="create-listing-text"
          />
          <label htmlFor="listingImg" className="create-listing-img">
          <i class="upload-icon fa-solid fa-upload"></i>
          </label>
          <input type="file" id="listingImg" style={{ display: "none" }} />
        </div>
        <div className="create-listing-form-group">
          <textarea
            className="create-listing-text create-listing-desc"
            placeholder="Property description"
          ></textarea>
        </div>
      </form>
      <button type="submit" className="create-listing-button">Submit</button>
    </div>
  );
};

export default CreateListing;
