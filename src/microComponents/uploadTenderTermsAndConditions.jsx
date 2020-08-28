import React, { Component } from "react";
class UploadTenderTermsAndConditions extends Component {
  state = {};
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-sigin">
            <div className="main-signup-header">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Upload terms & conditions for the tender</label>
                    <input type="file" className="dropify" data-height="200" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <button
                    data-target="#publishmodal"
                    data-toggle="modal"
                    className="btn btn-primary-gradient btn-block"
                  >
                    Publish Tender
                  </button>
                </div>
                <div className="col-md-6">
                  <button className="btn btn-warning-gradient btn-block">
                    Save for Later
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UploadTenderTermsAndConditions;
