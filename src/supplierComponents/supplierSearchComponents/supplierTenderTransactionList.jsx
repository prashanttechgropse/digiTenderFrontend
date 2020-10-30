import React, { Component } from "react";
import { paginate } from "../../utilities/paginate";
import pad from "../../services/padding";
import Pagination from "../../microComponents/pagination";
import { Link } from "react-router-dom";
class SupplierTransactionListDisplayCard extends Component {
  state = {
    tenderList: [],
    displayTenderList: null,
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
    this.state.tenderList = this.props.tenderList;
    this.state.displayTenderList = paginate(
      this.props.tenderList,
      this.state.currentPage,
      this.state.pageSize
    );
  }
  componentDidUpdate = async (prevProps) => {
    if (this.props.tenderList !== prevProps.tenderList) {
      const { tenderList } = this.props;
      await this.setState({ tenderList });
      const displayTenderList = paginate(
        this.props.tenderList,
        this.state.currentPage,
        this.state.pageSize
      );
      this.setState({ displayTenderList });
    }
  };
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
          <td>{`${tender.createdBy.firstName}`}</td>
          <td>{`${tender.deliveryLocation}`}</td>
          <td>{`$${tender.payment.tenderAmount}`}</td>
          <td>
            <span className={`badge badge-${styleOfBadge} f-14`}>
              {tender.status}
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
    return (
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
    );
  }
}

export default SupplierTransactionListDisplayCard;
