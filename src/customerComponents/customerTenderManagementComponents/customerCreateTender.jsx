import React, { Component } from "react";

import Joi from "joi-browser";
import DisplayTenderItemList from "../../microComponents/displayTenderItemList";
import AddItemCard from "../../microComponents/addItemCard";
import UploadTenderTermsAndConditions from "../../microComponents/uploadTenderTermsAndConditions";

import AddTenderDetailsCard from "../../microComponents/addTenderDetailsCard";

class CustomerCreateTender extends Component {
  state = {
    formData: {
      tenderClosingDate: "",
      tenderDeliveryDate: "",
      tenderDeliveryLocation: "",
      tenderBudgetAmount: "",
      isPublished: false,
      itemList: [],
    },
    file: null,
    errors: {},
  };

  schema = {
    tenderClosingDate: Joi.date().required(),
    tenderDeliveryDate: Joi.date().required(),
    tenderBudgetAmount: Joi.string().required(),
    tenderDeliveryLocation: Joi.string().required(),
    isPublished: Joi.boolean().required(),
    itemList: Joi.array()
      .items(
        Joi.object({
          selectCategory: Joi.string().required(),
          itemName: Joi.string().required(),
          quantityOfItem: Joi.string().required(),
          unitOfMeasure: Joi.string().required(),
        })
      )
      .min(1),
  };

  updateTenderDetails = (tenderDetails, errors) => {
    let formData = { ...this.state.formData };
    for (let item in tenderDetails) {
      formData[item] = tenderDetails[item];
    }
    this.setState({ formData: formData });
    this.setState({ errors: errors });
  };

  addItem = (item) => {
    const formData = { ...this.state.formData };
    formData.itemList.push(item);
    this.setState({ formData });
  };

  itemDelete = (itemIndex) => {
    const formData = { ...this.state.formData };
    formData.itemList.splice(itemIndex, 1);
    this.setState({ formData });
  };

  uploadFile = async (file) => {
    await this.setState({ file });
  };

  validateOnSubmit = () => {
    const result = Joi.validate(this.state.formData, this.schema, {
      abortEarly: false,
    });
    if (
      !result.error &&
      this.state.file !== null &&
      this.state.file !== undefined
    )
      return null;
    const errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
      return errors;
    }
    if (this.state.file === null || this.state.file === undefined) {
      const errors = {};
      errors.file = "upload file";
      return errors;
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validateOnSubmit();
    await this.setState({ errors: errors || {} });

    if (errors) return;

    await this.doSubmit();
  };

  published = async () => {
    let formData = { ...this.state.formData };
    formData.isPublished = true;
    this.setState({ formData });
  };

  saveForLater = async () => {
    let formData = { ...this.state.formData };
    formData.isPublished = false;
    this.setState({ formData });
  };

  render() {
    const { formData } = this.state;
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Create Tender
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <AddTenderDetailsCard
              updateTenderDetails={(formData, errors) =>
                this.updateTenderDetails(formData, errors)
              }
            />
            <AddItemCard addItem={(item) => this.addItem(item)} />
            {formData.itemList.length === 0 ? (
              <h2>"no items added yet"</h2>
            ) : (
              <DisplayTenderItemList
                itemList={formData.itemList}
                itemDelete={(index) => this.itemDelete(index)}
              />
            )}

            <UploadTenderTermsAndConditions
              onUpload={(file) => this.uploadFile(file)}
              published={this.published}
              saveForLater={this.saveForLater}
              disableButton={this.validateOnSubmit()}
            />
          </div>
        </div>
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
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
                <button
                  aria-label="Close"
                  className="btn ripple btn-success pd-x-25"
                  data-dismiss="modal"
                  type="button"
                  disabled={this.validateOnSubmit()}
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

export default CustomerCreateTender;
