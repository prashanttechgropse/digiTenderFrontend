import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "./pagination";
import { paginate } from "../utilities/paginate";
import pad from "../services/padding";
class TenderListDisplayCard extends Component {
  state = {
    displayTenderList: null,
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
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
        this.state.tenderList,
        this.state.currentPage,
        this.state.pageSize
      );
      this.setState({ displayTenderList });
    }
  };

  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const displayTenderList = paginate(
      this.props.tenderList,
      pageNumber,
      this.state.pageSize
    );
    this.setState({ displayTenderList });
  };

  renderTenderTable = () => {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    let styleOfBadge;
    let tenderList = this.state.displayTenderList;
    return tenderList.map((tender) => {
      srNo++;
      if (tender.status === "inProcess") styleOfBadge = "warning";
      else if (tender.status === "cancelled" || "rejected")
        styleOfBadge = "danger";
      else if (tender.status === "awarded") styleOfBadge = "primary";
      else {
        styleOfBadge = "success";
      }
      return (
        <tr role="row" key={srNo}>
          <td>{pad(srNo, 3)}</td>
          <td>
            <Link to={`/${this.props.profileType}/tenderDetails/${tender._id}`}>
              {tender._id.toString().substring(18, 24)}
            </Link>
          </td>
          <td>R {tender.budgetAmount} </td>
          <td>{new Date(tender.creationDate).toDateString()}</td>
          <td>{new Date(tender.deliveryDate).toDateString()}</td>
          <td>{new Date(tender.closingDate).toDateString()}</td>
          <td>
            <span className={`badge badge-${styleOfBadge} f-14`}>
              {tender.status.toUpperCase()}
            </span>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="card-title mg-b-0 datatable-link">
              Your Tender List
            </h4>
          </div>
          <p className="tx-12 tx-gray-500 mb-2">
            {/*Lorem Ipsum is simply dummy typesetting industry.*/}
          </p>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div className="row">
              <div className="col-sm-12">
                <table className="table dataTable">
                  <thead>
                    <tr role="row">
                      <th>Sr no</th>
                      <th>Tender I'd</th>
                      <th>Tender Amount</th>
                      <th>Date of Creation</th>
                      <th>Date of Delivery</th>
                      <th>Tender Closing Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTenderTable()}</tbody>
                </table>
                <div className="row">
                  <div className="col-sm-12">
                    <Pagination
                      currentPage={this.state.currentPage}
                      totalItemsCount={this.props.tenderList.length}
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
    );
  }
}

export default TenderListDisplayCard;
