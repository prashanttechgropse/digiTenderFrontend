import React, { Component } from "react";
import { Link } from "react-router-dom";
import { paginate } from "../../utilities/paginate";
import Pagination from "../../microComponents/pagination";
class CustomerSaveForLater extends Component {
  state = {
    displayTenderList: null,
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 1;
    this.state.displayTenderList = paginate(
      this.props.tenderList,
      this.state.currentPage,
      this.state.pageSize
    );
  }

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

    let tenderList = this.state.displayTenderList;
    return tenderList.map((tender) => {
      srNo++;
      return (
        <tr role="row">
          <td>{`#000${srNo}`}</td>
          <td>
            <Link
              to={"/customer/tenderDetails"}
              onClick={() => this.props.tenderClicked(tender._id)}
            >
              {tender._id.toString().substring(18, 24)}
            </Link>
          </td>
          <td>{tender.budgetAmount}</td>
          <td>{tender.creationDate}</td>
          <td>{tender.deliveryDate}</td>
          <td>{tender.closingDate}</td>
          <td>
            <span className={`badge badge-primary f-14`}>{tender.status}</span>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="breadcrumb-header justify-content-between">
          <div className="my-auto">
            <div className="d-flex">
              <h4 className="content-title mb-0 my-auto">Tender</h4>
              <span className="text-muted mt-1 tx-13 ml-2 mb-0">
                / Tender List
              </span>
            </div>
          </div>
          <div className="d-flex my-xl-auto right-content">
            <div className="pr-1 mb-3 mb-xl-0">
              <Link
                type="button"
                className="btn btn-primary "
                to="/customer/createTender"
              >
                <i className="fa fa-plus"></i> Create New Tender
              </Link>
            </div>
          </div>
        </div>

        <div className="row row-sm">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header pb-0">
                <div className="d-flex justify-content-between">
                  <h4 className="card-title mg-b-0 datatable-link">
                    Save for Later Tender List
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
                        <table className="table  dataTable">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerSaveForLater;
