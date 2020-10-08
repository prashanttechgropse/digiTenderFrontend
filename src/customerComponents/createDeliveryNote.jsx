import React, { Component } from "react";
import Form from "../macroComponents/form/form";
import httpService from "../services/httpService";
import config from "../config.json";
import { toast } from "react-toastify";
import Joi from "joi-browser";
import { createDeliveryNote } from "../services/deliveryNoteService";
class CreateDeliveryNote extends Form {
  state = {
    profileType: "",
    formData: {
      deliveryNoteNo: "",
      customerName: "",
      supplierName: "",
      tenderRefNo: "",
      deliveryLocation: "",
      deliveryDate: "",
      message: "",
      rating: "",
      reason: "",
    },
    errors: {},
  };

  schema = {
    deliveryNoteNo: Joi.string().required(),
    customerName: Joi.string().required(),
    supplierName: Joi.string().required(),
    tenderRefNo: Joi.string().required(),
    deliveryLocation: Joi.string().required(),
    deliveryDate: Joi.date().min("now").required(),
    message: Joi.string().required(),
    rating: Joi.number().required(),
    reason: Joi.string().required(),
  };

  componentDidMount = async () => {
    try {
      let res;
      if (this.props.match.path.includes("/customer")) {
        this.setState({ profileType: "customer" });
        res = await httpService.get(
          `${config.apiendpoint}/customer/myTenders/${this.props.match.params.tenderId}`
        );
      }
      if (this.props.match.path.includes("/receiver")) {
        this.setState({ profileType: "receiver" });
        res = await httpService.get(
          `${config.apiendpoint}/receiver/myTenders/${this.props.match.params.tenderId}`
        );
      }
      const { tender } = res.data;
      console.log(tender);
      let formData = {};
      formData.deliveryNoteNo = `DN${tender.tenderRefNo}`;
      formData.customerName = tender.createdBy.firstName;
      formData.supplierName = tender.suppliedBy.firstName;
      formData.tenderRefNo = tender.tenderRefNo;
      formData.deliveryLocation = tender.deliveryLocation;
      this.setState({ formData });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };
  doSubmit = async () => {
    const { data, error } = await createDeliveryNote(
      this.state.profileType,
      this.state.formData,
      this.props.match.params.tenderId,
      this.props.match.params.status
    );
    if (data) {
      this.props.history.push(`/${this.state.profileType}`);
    }
    if (error) return;
  };

  render() {
    const { formData: deliveryNote } = this.state;
    return (
      <div class="container-fluid">
        <div class="breadcrumb-header justify-content-between">
          <div class="my-auto">
            <div class="d-flex">
              <h4 class="content-title mb-0 my-auto">Delivery Notes</h4>
              <span class="text-muted mt-1 tx-13 ml-2 mb-0">
                / Create Notes
              </span>
            </div>
          </div>
        </div>

        <div class="row row-sm">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-flex justify-content-between">
                  <h4 class="card-title mg-b-0 datatable-link">
                    Tender Detail
                  </h4>
                </div>
                <p class="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and simply
                  dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div class="card-body">
                <div class="card-sigin">
                  <div class="main-signup-header">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Delivery Note No</label>
                          <input
                            class="form-control"
                            type="text"
                            value={deliveryNote.deliveryNoteNo}
                            readonly
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Customer Name</label>
                          <input
                            class="form-control"
                            type="text"
                            value={deliveryNote.customerName}
                            readonly
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Supplier Name</label>
                          <input
                            class="form-control"
                            type="text"
                            value={deliveryNote.supplierName}
                            readonly
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Tender Reference Number</label>
                          <input
                            class="form-control"
                            type="text"
                            value={deliveryNote.tenderRefNo}
                            readonly
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label>Delivery Address</label>
                          <input
                            class="form-control"
                            type="text"
                            value={deliveryNote.deliveryLocation}
                            readonly
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          {this.renderInput(
                            "deliveryDate",
                            "Delivery Date",
                            "date"
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-flex justify-content-between">
                  <h4 class="card-title mg-b-0 datatable-link">Your Notes</h4>
                </div>
                <p class="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and simply
                  dummy text of the printing and typesetting industry.
                </p>
              </div>
              <div class="card-body">
                <div class="card-sigin">
                  <div class="main-signup-header">
                    <div class="row">
                      <div class="col-md-6">
                        {this.renderSelect("reason", "Select Reason", [
                          { _id: "All Good", name: "All Good" },
                          {
                            _id: "Product Nor Received ",
                            name: "Product No Received  ",
                          },
                          { _id: "Damaged Product", name: "Damage dProduct" },
                          { _id: "other reasons", name: "other reasons " },
                        ])}
                      </div>
                      <div class="col-md-6">
                        {this.renderSelect("rating", "Select Rating", [
                          { _id: 1, name: "1 Rating " },
                          { _id: 2, name: "2 Rating " },
                          { _id: 3, name: "3 Rating " },
                          { _id: 4, name: "4 Rating " },
                          { _id: 5, name: "5 Rating " },
                        ])}
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          {this.renderTextArea("message", "Write Your Messege")}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-sigin">
                  <div class="main-signup-header">
                    <div class="row">
                      <div class="col-md-12">
                        <button
                          class="btn btn-warning-gradient btn-block"
                          disabled={this.validateOnSubmit()}
                          data-target="#publishmodal"
                          data-toggle="modal"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="publishmodal">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content tx-size-sm">
              <div class="modal-body tx-center pd-y-20 pd-x-20">
                <button
                  aria-label="Close"
                  class="close"
                  data-dismiss="modal"
                  type="button"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <i class="fa fa-upload tx-100 tx-orange lh-1 mg-t-20 d-inline-block"></i>
                <h4 class="tx-orange tx-semibold mg-b-20">
                  Are you sure u want to publish?
                </h4>
                <p class="mg-b-20 mg-x-20">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <button
                  aria-label="Close"
                  class="btn ripple btn-success pd-x-25"
                  data-dismiss="modal"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateDeliveryNote;
