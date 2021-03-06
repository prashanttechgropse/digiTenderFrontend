import React, { Component } from "react";
import { Link } from "react-router-dom";
import Pagination from "../../microComponents/pagination";
import { paginate } from "../../utilities/paginate";

import pad from "../../services/padding";

class AdminSupplierListDisplayCard extends Component {
  state = {
    currentPage: "",
    pageSize: "",
    supplierList: "",
    displaySupplierList: "",
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
    this.state.supplierList = this.props.supplierList;
    this.state.displaySupplierList = paginate(
      this.state.supplierList,
      this.state.currentPage,
      this.state.pageSize
    );
  }

  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const displaySupplierList = paginate(
      this.state.supplierList,
      pageNumber,
      this.state.pageSize
    );
    await this.setState({ displaySupplierList });
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.supplierList !== prevProps.supplierList) {
      const { supplierList } = this.props;
      await this.setState({ supplierList });
      const displaySupplierList = paginate(
        this.state.supplierList,
        this.state.currentPage,
        this.state.pageSize
      );
      this.setState({ displaySupplierList });
    }
  };

  renderSupplierList = () => {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    if (this.state.displaySupplierList === "") return;
    return this.state.displaySupplierList.map((supplier) => {
      srNo++;
      return (
        <tr role="row" key={srNo}>
          <td>{pad(srNo, 3)}</td>
          <td>{supplier.firstName}</td>
          <td>{supplier.entityRegistrationNo}</td>
          <td>{supplier.contactNumber}</td>
          <td>{`${supplier.tendersAwarded.length} Tenders`}</td>
          <td>
            <span className="badge badge-primary f-14">Active</span>
          </td>
          <td>
            <Link
              to={`/admin/supplierDetails/${supplier._id}`}
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
    if (this.state.supplierList === "") return null;
    return (
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header pb-0">
              <div className="d-flex justify-content-between">
                <h4 className="card-title mg-b-0 datatable-link">
                  Supplier List
                </h4>
              </div>
              <p className="tx-12 tx-gray-500 mb-2">{/* Lorem Ipsum .*/}</p>
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
                            <th>Name</th>
                            <th>Reference No</th>
                            <th>Contact No</th>
                            <th>No Of Tenders</th>
                            <th>Status</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderSupplierList()}</tbody>
                      </table>
                    </div>
                  </div>

                  <Pagination
                    currentPage={this.state.currentPage}
                    totalItemsCount={this.state.supplierList.length}
                    pageSize={this.state.pageSize}
                    onPageChange={this.handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminSupplierListDisplayCard;
