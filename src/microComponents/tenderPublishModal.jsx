import React, { Component } from "react";
class TenderPublishModal extends Component {
  state = {};
  render() {
    return (
      <div className="modal" id="publishmodal">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content tx-size-sm">
            <div className="modal-body tx-center pd-y-20 pd-x-20">
              <button
                aria-label="Close"
                className="close"
                data-dismiss="modal"
                type="button"
              >
                <span aria-hidden="true">×</span>
              </button>
              <i className="fa fa-upload tx-100 tx-orange lh-1 mg-t-20 d-inline-block"></i>
              <h4 className="tx-orange tx-semibold mg-b-20">
                Are you sure u want to publish?
              </h4>
              <p className="mg-b-20 mg-x-20">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.
              </p>
              <button
                aria-label="Close"
                className="btn ripple btn-success pd-x-25"
                data-dismiss="modal"
                type="button"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TenderPublishModal;
