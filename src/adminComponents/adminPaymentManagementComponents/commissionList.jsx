import React, { Component } from "react";
import pad from "../../services/padding";
import httpService from "../../services/httpService";
import { Link } from "react-router-dom";
import { paginate } from "../../utilities/paginate";
import Pagination from "../../microComponents/pagination";
class CommissionList extends Component {
  state = {
    commissionList: [],
    displayList: [],
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
      `${process.env.REACT_APP_APIENDPOINT}/admin/commissionList`
    );
    this.setState({ commissionList: data.commissionList });
    const displayList = paginate(
      this.state.commissionList,
      this.state.currentPage,
      this.state.pageSize
    );
    this.setState({ displayList });
  };

  renderCommissionList() {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;
    const commissionList = this.state.displayList;
    return commissionList.map((listItem) => {
      srNo++;
      return (
        <tr key={srNo} role="row">
          <td>{pad(srNo, 3)}</td>
          <td>{listItem.customer.firstName}</td>
          <td>
            <Link to={`/admin/tenderDetails/${listItem.tender._id}`}>
              {listItem.tender.tenderRefNo}
            </Link>
          </td>
          <td>{listItem.tender.deliveryDate.toString().substring(0, 10)}</td>
          <td>{listItem.commission}</td>
          <td>
            <span
              className={`badge ${
                listItem.commissionPaid ? "badge-success" : "badge-danger"
              } f-14`}
            >
              {listItem.commissionPaid ? "paid" : "Not Paid"}
            </span>
          </td>
          <td>
            <Link
              to={`/admin/commission-detail/${listItem._id}`}
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
    const displayList = paginate(
      this.state.commissionList,
      pageNumber,
      this.state.pageSize
    );
    await this.setState({ displayList });
  };

  render() {
    return (
      <div className="tab-pane" id="Commsion">
        <div className="card-header pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="card-title mg-b-0 datatable-link">
              Commission List
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
              id="example4_wrapper"
              className="dataTables_wrapper dt-bootstrap4"
            >
              <div className="row">
                <div className="col-sm-12">
                  <table className="table text-md-nowrap dataTable">
                    <thead>
                      <tr role="row">
                        <th>Sr.No</th>
                        <th>Customer Name</th>
                        <th>Tender Name</th>
                        <th>Delivery Date</th>
                        <th>Commission</th>
                        <th>Payment Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderCommissionList()} </tbody>
                  </table>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <Pagination
                    currentPage={this.state.currentPage}
                    totalItemsCount={this.state.commissionList.length}
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

export default CommissionList;
