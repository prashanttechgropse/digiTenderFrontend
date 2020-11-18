import React, { Component } from "react";

import Joi from "joi-browser";
import DisplayTenderItemList from "../../microComponents/displayTenderItemList";
import AddItemCard from "../../microComponents/addItemCard";
import UploadTenderTermsAndConditions from "../../microComponents/uploadTenderTermsAndConditions";

import { editSavedTender } from "../../services/tenderService";

import httpService from "../../services/httpService";
import { toast } from "react-toastify";

import EditTenderDetailsCard from "../../microComponents/editTenderDetailsCard";
const JoiLatest = require("joi");

class CustomerEditTender extends Component {
  state = {
    itemTypes: [],
    tender: null,
    formData: {
      closingDate: "",
      deliveryDate: "",
      deliveryLocation: "",
      budgetAmount: "",
      isPublished: false,
      itemList: [],
    },
    file: null,
    errors: {},
  };

  schema = {
    closingDate: Joi.date().min("now").required(),
    deliveryDate: Joi.date().greater(Joi.ref("closingDate")).required(),
    budgetAmount: Joi.number().required(),
    deliveryLocation: Joi.string().required(),
    isPublished: Joi.boolean().required(),
    itemList: Joi.array()
      .items(
        Joi.object({
          category: Joi.string().required(),
          name: Joi.string().required(),
          quantity: Joi.number().required(),
          unitOfMeasure: Joi.string().required(),
        })
      )
      .min(1),
  };
  schemaForValidate = JoiLatest.object({
    closingDate: JoiLatest.when("isPublished", {
      is: true,
      then: JoiLatest.date().min("now").required(),
      otherwise: JoiLatest.date().min("now").optional().allow(""),
    }),
    deliveryDate: JoiLatest.when("isPublished", {
      is: true,
      then: JoiLatest.date().greater(JoiLatest.ref("closingDate")).required(),
      otherwise: JoiLatest.date()
        .greater(JoiLatest.ref("closingDate"))
        .optional()
        .allow(""),
    }),
    budgetAmount: JoiLatest.when("isPublished", {
      is: true,
      then: JoiLatest.number().required(),
      otherwise: JoiLatest.number().optional().allow(""),
    }),
    deliveryLocation: JoiLatest.when("isPublished", {
      is: true,
      then: JoiLatest.string().required(),
      otherwise: JoiLatest.string().optional().allow(""),
    }),
    isPublished: JoiLatest.boolean().required(),
    itemList: JoiLatest.when("isPublished", {
      is: true,
      then: JoiLatest.array()
        .items(
          JoiLatest.object({
            category: JoiLatest.string().required(),
            name: JoiLatest.string().required(),
            quantity: JoiLatest.number().required(),
            unitOfMeasure: JoiLatest.string().required(),
          })
        )
        .min(1),
      otherwise: JoiLatest.optional(),
    }),
  });

  async componentDidMount() {
    {
      try {
        const { data } = await httpService.get(
          `${process.env.REACT_APP_APIENDPOINT}/itemTypes`
        );
        let itemTypes = await data.itemType.map((itemType) => {
          return { _id: itemType, name: itemType };
        });
        await this.setState({ itemTypes });
      } catch (error) {
        toast.error(error.message);
      }
    }
    if (!this.props.match.params.tenderId) return null;
    let data;
    try {
      data = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/customer/myTenders/${this.props.match.params.tenderId}`
      );
      await this.setState({ tender: data.data.tender });
      let formData = { ...this.state.formData };
      for (let item in formData) {
        formData[item] = this.state.tender[item];
      }
      if (formData.closingDate === null) {
        formData.closingDate = "";
      }
      if (formData.deliveryDate === null) {
        formData.deliveryDate = "";
      }
      formData.itemList.map((itemObject) => {
        return delete itemObject._id;
      });
      await this.setState({ formData });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

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
    this.setState({ file });
  };

  validateOnSubmit = () => {
    const result = this.schemaForValidate.validate(this.state.formData, {
      abortEarly: false,
    });

    if (
      !result.error &&
      this.state.isPublished === true &&
      this.state.file !== null &&
      this.state.file !== undefined &&
      this.state.file.type === "application/pdf"
    )
      return null;
    if (!result.error && this.state.formData.isPublished === false) return null;
    const errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
      return errors;
    }
    if (this.state.file === null || this.state.file === undefined) {
      const errors = {};
      errors.file = "Upload Document";
      return errors;
    }
    if (this.state.file.type !== "application/pdf") {
      const errors = {};
      errors.file = "type of file should be only pdf";
      return errors;
    }
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
    this.handleSubmit();
  };

  handleSubmit = async (e) => {
    if (e !== undefined) {
      e.preventDefault();
    }
    const errors = this.validateOnSubmit();
    this.setState({ errors: errors || {} });

    if (errors) return;

    await this.doSubmit();
  };

  doSubmit = async () => {
    const formData = new FormData();
    formData.append("tenderId", this.state.tender._id);
    for (const item in this.state.formData) {
      if (item === "itemList") {
        formData.append(item, JSON.stringify(this.state.formData[item]));
      } else formData.append(item, this.state.formData[item]);
    }
    if (this.state.file !== null) {
      formData.append("myFile1", this.state.file, this.state.file.name);
    }
    const { data, error } = await editSavedTender(formData);
    if (data) {
      this.props.history.push("/customer");
    }
    if (error) return;
  };

  render() {
    const { formData } = this.state;
    if (this.state.tender === null) {
      return null;
    }
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Edit Tender
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <EditTenderDetailsCard
              updateTenderDetails={(formData, errors) =>
                this.updateTenderDetails(formData, errors)
              }
              formData={this.state.formData}
              errors={this.state.errors}
            />
            <AddItemCard
              addItem={(item) => this.addItem(item)}
              itemTypes={this.state.itemTypes}
            />
            {formData.itemList.length === 0 ? (
              <h2 style={{ color: "red" }}>"no items added yet"</h2>
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
              fileError={this.state.errors.file}
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

export default CustomerEditTender;
