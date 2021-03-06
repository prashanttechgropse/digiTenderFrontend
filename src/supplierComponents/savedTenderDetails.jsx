import React, { Component } from "react";
import httpService from "../services/httpService";

import { toast } from "react-toastify";
import SupplierBidCards from "./supplierBidCards";

import Joi from "joi-browser";
import { Link } from "react-router-dom";

import { createBid } from "../services/bidService";
import SupplierSavedTenderDetailsRow from "./supplierSavedTenderDetailsRow";

const fileDownload = require("js-file-download");

class SavedTenderDetails extends Component {
  state = {
    bid: null,
    tender: null,
    errors: {},
    acceptTermsConditions: false,
    totalBidAmount: 0,
  };

  async componentDidMount() {
    if (!this.props.match.params.tenderId) return;
    try {
      let { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/supplier/savedTenders/${this.props.match.params.tenderId}`
      );

      await data.bid.itemList.map(
        (item) => (item.price = parseInt(item.price))
      );

      await this.setState({ tender: data.tender, bid: data.bid });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  schema = Joi.object({
    itemList: Joi.array()
      .items(
        Joi.object({
          category: Joi.string().required(),
          name: Joi.string().required(),
          quantity: Joi.number().required(),
          unitOfMeasure: Joi.string().required(),
          price: Joi.number().required(),
        }).unknown()
      )
      .min(1),
  }).unknown();

  downloadTenderTerms = async () => {
    const { tender } = this.state;
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/tenderDocuments/${tender._id}/${tender.tenderDoc}`,
        {
          responseType: "blob",
        }
      );
      await fileDownload(data, `${tender.tenderDoc}`);
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  toggleTermsConditions = async () => {
    let acceptTermsConditions = this.state.acceptTermsConditions;
    acceptTermsConditions = !acceptTermsConditions;
    await this.setState({ acceptTermsConditions });
  };

  validateOnSubmit = () => {
    const result = Joi.validate(this.state.bid, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validateOnSubmit();
    this.setState({ errors: errors || {} });

    if (errors) return;

    let bid = { ...this.state.bid };
    if (e.currentTarget.name === "submit") {
      bid.isPublished = true;
    } else bid.isPublished = false;

    bid.totalAmount = 0;

    bid.itemList.map((item) => {
      bid.totalAmount =
        bid.totaAmount + parseInt(item.price) * parseInt(item.quantity);
    });

    await this.setState({ bid });

    await this.doSubmit();
  };

  doSubmit = async () => {
    const { bid, tender } = this.state;
    if (bid.totalAmount > tender.budgetAmount) {
      toast.error("Bid total amount exceeds tender budget amount");
      return;
    }
    const { data, error } = await createBid(bid);
    if (data) {
      return await this.props.history.push("/supplier");
    }
    if (error) return;
  };

  handleIgnore = async () => {
    try {
      let { data } = await httpService.delete(
        `${process.env.REACT_APP_APIENDPOINT}/supplier/ignoreSavedTender/${this.props.match.params.tenderId}`
      );
      toast.success(data.message);
      if (data) {
        return await this.props.history.push("/supplier");
      }
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  addPrice = async (price, srNo) => {
    const bid = { ...this.state.bid };
    bid.itemList[srNo - 1].price = price;
    await this.setState({ bid });
    this.calculateTotalBidAmount();
  };

  renderItemList = () => {
    const { tender } = this.state;
    let srNo = 0;
    return tender.itemList.map((item) => {
      srNo++;
      return (
        <SupplierSavedTenderDetailsRow
          bid={this.state.bid}
          key={item._id}
          item={item}
          srNo={srNo}
          pushPrice={(price, srNo) => this.addPrice(price, srNo)}
        />
      );
    });
  };

  calculateTotalBidAmount = async () => {
    let totalAmount = 0;
    await this.state.tender.itemList.map((item) => {
      let tempItem = item;
      if (!tempItem.price && Number.isNaN(tempItem.price)) {
        console.log(Number.isNaN(tempItem.price));
        tempItem.price = 0;
      }
      totalAmount =
        parseFloat(totalAmount) +
        parseFloat(tempItem.price) * parseFloat(tempItem.quantity);
    });
    this.setState({ totalBidAmount: totalAmount });
  };

  render() {
    if (this.state.tender === null) return null;
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Saved Tender Detail
              </span>
            </div>
          </div>
        </div>
        <SupplierBidCards
          tender={this.state.tender}
          totalBidAmount={this.state.totalBidAmount}
        />
        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Tender Products List
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  {/*Lorem Ipsum is simply dummy typesetting industry.*/}
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div
                    id="example1_wrapper"
                    className="dataTables_wrapper dt-bootstrap4"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          className="table text-md-nowrap dataTable"
                          id="example1"
                        >
                          <thead>
                            <tr role="row">
                              <th>Sr. No</th>
                              <th>Category</th>
                              <th>Item </th>
                              <th>Unit of Meassure</th>
                              <th>Qty</th>
                              <th>Price</th>
                              <th>Total</th>
                            </tr>
                          </thead>
                          <tbody>{this.renderItemList()} </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="check-position">
                <input
                  type="checkbox"
                  name=""
                  className="check-term"
                  onClick={this.toggleTermsConditions}
                />
                {" I accept"}
                <Link onClick={this.downloadTenderTerms}>
                  {" Tender Terms & Conditions"}
                </Link>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Link
              to="/supplier"
              className="btn btn-warning-gradient btn-block"
              onClick={this.handleIgnore}
            >
              Ignore
            </Link>
          </div>
          <div className="col-md-6">
            <button
              onClick={this.handleSubmit}
              className="btn btn-warning-gradient btn-block"
              disabled={
                !this.state.acceptTermsConditions || this.validateOnSubmit()
              }
              name="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SavedTenderDetails;
