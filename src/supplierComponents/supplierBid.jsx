import React, { Component } from "react";
import httpService from "../services/httpService";
import config from "../config.json";
import { toast } from "react-toastify";
import SupplierBidCards from "./supplierBidCards";

import Joi from "joi-browser";
import { Link } from "react-router-dom";
import SupplierTenderBidRow from "./supplierTenderBidRow";

class SupllierBid extends Component {
  state = {
    tender: null,
    errors: {},
    acceptTermsConditions: false,
  };

  schema = {};

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

  toggleTermsConditions = async () => {
    let acceptTermsConditions = this.state.acceptTermsConditions;
    acceptTermsConditions = !acceptTermsConditions;
    await this.setState({ acceptTermsConditions });
    console.log(this.state.acceptTermsConditions);
  };

  validateOnSubmit = () => {
    const result = Joi.validate(this.state.tender, this.schema, {
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
    console.log(errors);

    if (errors) return;

    await this.doSubmit();
  };

  doSubmit = async () => {
    console.log(this.state.tender.itemList);
  };

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/tenders/${this.props.tenderId}`
      );
      this.setState({ tender: data.tender });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  addPrice = async (price, srNo) => {
    const tender = { ...this.state.tender };
    tender.itemList[srNo - 1].price = price;
    await this.setState({ tender });
  };

  renderItemList = () => {
    const { tender } = this.state;
    let srNo = 0;
    return tender.itemList.map((item) => {
      srNo++;
      return (
        <SupplierTenderBidRow
          key={item._id}
          item={item}
          srNo={srNo}
          pushPrice={this.addPrice}
        />
      );
    });
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
                / Tender Detail
              </span>
            </div>
          </div>
        </div>
        <SupplierBidCards tender={this.state.tender} />
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
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
                              <th>Item / Description</th>
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
                I accept
                <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/supplier/terms-and-condition">
                  Terms & Conditions
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to="/supplier" className="btn btn-warning-gradient btn-block">
              Ignore
            </Link>
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-primary-gradient btn-block"
              disabled={
                !this.state.acceptTermsConditions || this.validateOnSubmit()
              }
            >
              Save Draft
            </button>
          </div>
          <div className="col-md-4">
            <button
              onClick={this.handleSubmit}
              className="btn btn-warning-gradient btn-block"
              disabled={
                !this.state.acceptTermsConditions || this.validateOnSubmit()
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SupllierBid;
