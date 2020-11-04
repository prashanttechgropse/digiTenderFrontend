import React, { Component } from "react";
import { paginate } from "../../utilities/paginate";
import Pagination from "../../microComponents/pagination";
import { Link } from "react-router-dom";
import pad from "../../services/padding";
class SecondaryUserDeliveryNoteDisplayCard extends Component {
  state = {
    profileType: "",
    tenderList: [],
    displayTenderList: [],
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
    this.state.profileType = this.props.profileType;
    this.state.tenderList = this.props.tenderList;
    this.state.displayTenderList = paginate(
      this.state.tenderList,
      this.state.currentPage,
      this.state.pageSize
    );
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

  renderTenderTable = () => {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;

    let tenderList = this.state.displayTenderList;
    if (tenderList === null) return;
    return tenderList.map((tender) => {
      srNo++;
      return (
        <tr key={srNo} role="row">
          <td>
            <Link
              to={`/${this.state.profileType}/deliveryNoteDetails/${tender._id}`}
            >
              {pad(srNo, 3)}
            </Link>
          </td>
          <td>
            <Link to={`/${this.state.profileType}/tenderDetails/${tender._id}`}>
              {tender._id.toString().substring(18, 24)}
            </Link>
          </td>
          <td>{tender.suppliedBy.firstName}</td>
          <td>{`DN${tender.tenderRefNo}`}</td>
          <td>{tender.deliveryLocation}</td>
          {this.state.profileType === "customer" ? (
            <td>
              {tender.receiver ? tender.receiver.name : "no receiver assigned"}
            </td>
          ) : (
            ""
          )}
          <td>
            <span
              className={`badge badge-${
                tender.status === "completed" ? "success" : "danger"
              } f-14`}
            >
              {tender.status.toUpperCase()}
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
                  Delivery Notes List
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
                            <th>DN Number</th>
                            <th>Tender Id</th>
                            <th>Supplier Name</th>
                            <th>Note Number</th>
                            <th>Delivery Location</th>
                            {this.state.profileType === "customer" ? (
                              <th>Receiver Name</th>
                            ) : (
                              ""
                            )}
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderTenderTable()}</tbody>
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

export default SecondaryUserDeliveryNoteDisplayCard;
