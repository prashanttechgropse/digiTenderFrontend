import React, { Component } from "react";
import Pagination from "../../microComponents/pagination";
import { paginate } from "../../utilities/paginate";
import httpService from "../../services/httpService";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import pad from "../../services/padding";
class SupplierTransactionManagement extends Component {
  state = {
    tenderList: null,
    displayTenderList: null,
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
  }

  async componentDidMount() {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/supplier/myTransactionList`
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

  renderTenderList = () => {
    if (this.state.tenderList === null || this.state.tenderList.length === 0) {
      return null;
    }
    const tenderList = this.state.displayTenderList;
    if (tenderList === null) return;
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    let styleOfBadge;
    return tenderList.map((tender) => {
      srNo++;
      if (tender.status === "completed") styleOfBadge = "success";
      else if (tender.status === "rejected") styleOfBadge = "danger";
      else if (tender.status === "awarded") styleOfBadge = "primary";
      else {
        styleOfBadge = "warning";
      }
      return (
        <tr key={srNo} role="row">
          <td>{pad(srNo, 3)}</td>
          <td>
            <Link to={`/supplier/tenderDetails/${tender._id}`}>
              {tender.tenderRefNo}
            </Link>
          </td>
          <td>
            <span
              className={`badge ${
                tender.payment.paidByAdmin ? "badge-success" : "badge-danger"
              } f-14`}
            >
              {tender.payment.paidByAdmin
                ? new Date(tender.payment.paidByAdminDate).toDateString()
                : "transaction not made yet"}
            </span>
          </td>
          <td>
            {tender.createdBy.organisationType === "Sole Trader"
              ? tender.createdBy.firstName
              : tender.createdBy.companyName}
          </td>
          <td>{`${tender.deliveryLocation}`}</td>
          <td>{`R ${tender.payment.tenderAmount} `}</td>
          <td>
            <span className={`badge badge-${styleOfBadge} f-14`}>
              {tender.status.toUpperCase()}
            </span>
          </td>
          <td>
            <span
              className={`badge ${
                tender.payment.paidByAdmin ? "badge-success" : "badge-danger"
              } f-14`}
            >
              {tender.payment.paidByAdmin ? "paid" : "Not Paid"}
            </span>
          </td>
        </tr>
      );
    });
  };

  render() {
    if (this.state.tenderList === null || this.state.tenderList.length === 0)
      return (
        <h1 className="no-data-found">You dont have any Transactions yet</h1>
      );
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Transaction List
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
                    Your Transaction List
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
                              <th>Sr No</th>
                              <th>Tender Reference number</th>
                              <th>Transaction Date</th>
                              <th>Customer Name</th>
                              <th>Location</th>
                              <th>Tender Amount</th>
                              <th>Tender Status</th>
                              <th>Payment Status</th>
                            </tr>
                          </thead>
                          <tbody>{this.renderTenderList()} </tbody>
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
      </div>
    );
  }
}

export default SupplierTransactionManagement;
