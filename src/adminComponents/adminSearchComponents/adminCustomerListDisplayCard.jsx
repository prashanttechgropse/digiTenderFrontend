import React, { Component } from "react";
import { Link } from "react-router-dom";
import { paginate } from "../../utilities/paginate";
import Pagination from "../../microComponents/pagination";

import pad from "../../services/padding";

class AdminCustomerListDisplayCard extends Component {
  state = {
    currentPage: "",
    pageSize: "",
    customerList: [],
    displayCustomerList: [],
  };
  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
    this.state.customerList = this.props.customerList;
    this.state.displayCustomerList = paginate(
      this.state.customerList,
      this.state.currentPage,
      this.state.pageSize
    );
  }
  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const displayCustomerList = paginate(
      this.state.customerList,
      pageNumber,
      this.state.pageSize
    );
    await this.setState({ displayCustomerList });
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.customerList !== prevProps.customerList) {
      const { customerList } = this.props;
      await this.setState({ customerList });
      const displayCustomerList = paginate(
        this.state.customerList,
        this.state.currentPage,
        this.state.pageSize
      );
      this.setState({ displayCustomerList });
    }
  };

  renderCustomerList = () => {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    if (this.state.displayCustomerList === null) {
      return null;
    }
    return this.state.displayCustomerList.map((customer) => {
      srNo++;
      return (
        <tr role="row" key={srNo}>
          <td>{pad(srNo, 3)}</td>
          <td>{customer.firstName}</td>
          <td>{customer.entityRegistrationNo}</td>
          <td>{customer.contactNumber}</td>
          <td>{`${customer.tenders.length} Tenders`}</td>
          <td>
            <span className="badge badge-primary f-14">Active</span>
          </td>
          <td>
            <Link
              to={`/admin/customerDetails/${customer._id}`}
              className="detail-icons"
            >
              <i className="fa fa-eye"></i>
            </Link>
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
                  Customer List
                </h4>
              </div>
              <p className="tx-12 tx-gray-500 mb-2">{/* Lorem Ipsum .*/}</p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div className="dataTables_wrapper dt-bootstrap4">
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table text-md-nowrap dataTable">
                        <thead>
                          <tr role="row">
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Reference No</th>
                            <th>Contact No</th>
                            <th>No Of Tenders</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderCustomerList()}</tbody>
                      </table>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Pagination
                        currentPage={this.state.currentPage}
                        totalItemsCount={this.state.customerList.length}
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
    );
  }
}

export default AdminCustomerListDisplayCard;
