import React, { Component } from "react";
import httpService from "../../services/httpService";
import config from "../../config.json";
import { toast } from "react-toastify";
import Pagination from "../../microComponents/pagination";
import { paginate } from "../../utilities/paginate";
import { Link } from "react-router-dom";
import Form from "../../macroComponents/form/form";
import Joi from "joi-browser";

class AssignReceiver extends Form {
  state = {
    tenderList: null,
    receiversList: null,
    displayTenderList: null,
    currentPage: null,
    pageSize: null,
    formData: {
      receiverId: null,
      tenderId: null,
    },
    errors: {},
  };
  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 4;
  }
  schema = {
    receiverId: Joi.string().required(),
    tenderId: Joi.string().required(),
  };

  async componentDidMount() {
    try {
      {
        const { data } = await httpService.get(
          `${config.apiendpoint}/customer/receiverList`
        );
        const { receiversList } = data;
        await this.setState({ receiversList });
        console.log(this.state.receiversList);
      }
      const { data } = await httpService.get(
        `${config.apiendpoint}/customer/tenderList/awarded`
      );
      const { tenderList } = data;
      await this.setState({ tenderList });
      const displayTenderList = paginate(
        this.state.tenderList,
        this.state.currentPage,
        this.state.pageSize
      );
      await this.setState({ displayTenderList });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  }

  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const displayTenderList = paginate(
      this.state.tenderList,
      pageNumber,
      this.state.pageSize
    );
    await this.setState({ displayTenderList });
  };

  populateTenderId = async (tenderId) => {
    const formData = { ...this.state.formData };
    formData.tenderId = tenderId;
    await this.setState({ formData });
  };

  doSubmit = async () => {
    await httpService.post(
      `${config.apiendpoint}/customer/assignReceiver`,
      this.state.formData
    );
    window.location.reload();
  };

  renderTenderList = () => {
    const tenderList = this.state.displayTenderList;
    if (tenderList === null) return null;
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    let styleOfBadge;
    return tenderList.map((tender) => {
      srNo++;
      if (tender.status === "completed") styleOfBadge = "success";
      else if (tender.status === "cancelled") styleOfBadge = "danger";
      else if (tender.status === "awarded") styleOfBadge = "primary";
      else {
        styleOfBadge = "warning";
      }

      return (
        <tr role="row">
          <td>{`000${srNo}`}</td>
          <td>
            <Link to={`/customer/tenderDetails/${tender._id}`}>
              {tender._id.toString().substring(18, 24)}
            </Link>
          </td>
          <td>{tender.budgetAmount}</td>
          <td>{tender.creationDate.toString().substring(0, 10)}</td>
          <td>{tender.deliveryDate.toString().substring(0, 10)}</td>
          <td>
            <span className="badge badge-primary f-14">
              {tender.receiver ? tender.receiver.name : "no receiver"}
            </span>
          </td>
          <td>
            <button
              href="#assignreceiver"
              data-toggle="modal"
              className="btn btn-main-primary pd-x-20 w-100"
              disabled={tender.receiver}
              onClick={() => this.populateTenderId(tender._id)}
            >
              Assign Receiver
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    if (this.state.tenderList === null) return null;
    if (this.state.tenderList.length === 0) {
      return <h1>you dont have any awarded tenders yet</h1>;
    }
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                /Assign Receiver
              </span>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Your Tender List
                  </h4>
                </div>
                <p className="tx-12 tx-gray-500 mb-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <div className="dataTables_wrapper dt-bootstrap4">
                    <div className="row">
                      <div className="col-sm-12">
                        <table className="table text-md-nowrap dataTable">
                          <thead>
                            <tr role="row">
                              <th>Sr no</th>
                              <th>Tender I'd</th>
                              <th>Tender Amount</th>
                              <th>Date of Creation</th>
                              <th>Date of Delivery</th>
                              <th>Assign Reveiver</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>{this.renderTenderList()}</tbody>
                        </table>
                        <div className="row">
                          <div className="col-sm-12">
                            <Pagination
                              currentPage={this.state.currentPage}
                              totalItemsCount={this.state.tenderList.length}
                              pageSize={this.state.pageSize}
                              onPageChange={this.handlePageChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="assignreceiver">
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
                <div className="main-section">
                  <div className="card-body">
                    <div className="main-content-label mg-b-5">
                      Assign Driver For Tender
                    </div>
                    <p className="mg-b-20">
                      Lorem Ipsum is simply dummy text of the printing .
                    </p>
                    <form
                      action=""
                      id="selectForm"
                      name="selectForm"
                      novalidate=""
                      data-select2-id="selectForm"
                    >
                      <div className="row">
                        <div className="col-lg-12 col-md-12">
                          {this.renderSelect(
                            "receiverId",
                            "List of receivers",
                            this.state.receiversList.filter(
                              (receiver) => receiver.user.isApproved === true
                            )
                          )}
                        </div>
                        <div className="col-lg-12 col-md-12 mg-t-10 mg-t-30">
                          {this.renderButton(
                            "assign Receiver",
                            this.handleSubmit,
                            "btn btn-main-primary pd-x-20 w-100"
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AssignReceiver;
