import React, { Component } from "react";

import Joi from "joi-browser";
import DisplayTenderItemList from "../../microComponents/displayTenderItemList";
import AddItemCard from "../../microComponents/addItemCard";
import UploadTenderTermsAndConditions from "../../microComponents/uploadTenderTermsAndConditions";
import TenderPublishModal from "../../microComponents/tenderPublishModal";
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
    itemList: Joi.array(),
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

  validateBeforeUpload() {
    const { error, result } = Joi.validate(this.state.formData, this.schema);
  }

  uploadTender = () => {};

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

            <UploadTenderTermsAndConditions onUpload={this.uploadTender} />
          </div>
        </div>
        <TenderPublishModal />
      </div>
    );
  }
}

export default CustomerCreateTender;
