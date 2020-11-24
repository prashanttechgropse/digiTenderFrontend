import React, { Component } from "react";
import httpService from "../../services/httpService";
import pad from "../../services/padding";
import { Link } from "react-router-dom";
import { paginate } from "../../utilities/paginate";
import Pagination from "../../microComponents/pagination";
class ParticularSupplierPaymentList extends Component {
  state = {
    supplierPaymentList: [],
    displayPaymentList: [],
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
  }

  componentDidMount = async () => {
    const { data } = await httpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/supplierPaymentList`
    );
    this.setState({ supplierPaymentList: data.supplierPaymentList });
    const displayPaymentList = paginate(
      this.state.supplierPaymentList,
      this.state.currentPage,
      this.state.pageSize
    );
    this.setState({ displayPaymentList });
  };

  renderSupplierPaymentList() {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    const supplierPaymentList = this.state.displayPaymentList;
    return supplierPaymentList.map((listItem) => {
      srNo++;
      return (
        <tr key={srNo} role="row">
          <td>{pad(srNo, 3)}</td>
          <td>{listItem.supplier.firstName}</td>
          <td>
            <Link to={`/admin/tenderDetails/${listItem.tender._id}`}>
              {listItem.tender.tenderRefNo}
            </Link>
          </td>
          <td>{new Date(listItem.tender.deliveryDate).toDateString()}</td>
          <td>{listItem.tenderAmount} Rand</td>
          <td>
            <span
              className={`badge ${
                listItem.tender.status === "awarded"
                  ? "badge-primary"
                  : listItem.tender.status === "completed"
                  ? "badge-success"
                  : "badge-danger"
              } f-14`}
            >
              {listItem.tender.status}
            </span>
          </td>
          <td>
            <span
              className={`badge ${
                listItem.paidByAdmin ? "badge-success" : "badge-danger"
              } f-14`}
            >
              {listItem.paidByAdmin ? "paid" : "Not Paid"}
            </span>
          </td>
          <td>
            <Link
              to={`/admin/supplier-payment-detail/${listItem._id}`}
              className="detail-icons"
            >
              <i className="fa fa-eye"></i>
            </Link>
          </td>
        </tr>
      );
    });
  }

  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const displayPaymentList = paginate(
      this.state.supplierPaymentList,
      pageNumber,
      this.state.pageSize
    );
    await this.setState({ displayPaymentList });
  };

  render() {
    return (
      <div className="tab-pane" id="PaymentDetail">
        <div className="card-header pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="card-title mg-b-0 datatable-link">
              Supplier Payment List
            </h4>
          </div>
          <p className="tx-12 tx-gray-500 mb-2">{/* Lorem Ipsum .*/}</p>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <div
              id="example2_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12">
                  <table className="table text-md-nowrap dataTable">
                    <thead>
                      <tr role="row">
                        <th>Sr.No</th>
                        <th>Supplier Name</th>
                        <th>Tender Reference Number</th>
                        <th>Delivery Date</th>
                        <th>Total Price</th>
                        <th>Tender Status</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderSupplierPaymentList()}</tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <Pagination
                    currentPage={this.state.currentPage}
                    totalItemsCount={this.state.supplierPaymentList.length}
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

export default ParticularSupplierPaymentList;
