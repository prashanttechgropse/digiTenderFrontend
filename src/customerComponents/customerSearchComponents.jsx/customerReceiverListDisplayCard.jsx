import React, { Component } from "react";
import Pagination from "../../microComponents/pagination";
import { paginate } from "../../utilities/paginate";
import { pad } from "lodash";
import httpService from "../../services/httpService";
class CustomerReceiverListDisplayCard extends Component {
  state = {
    receiverList: [],
    displayReceiverList: [],
    currentPage: null,
    pageSize: null,
  };

  constructor(props) {
    super(props);
    this.state.currentPage = 1;
    this.state.pageSize = 5;
    this.state.receiverList = this.props.receiverList;
    this.state.displayReceiverList = paginate(
      this.state.receiverList,
      this.state.currentPage,
      this.state.pageSize
    );
  }

  componentDidUpdate = async (prevProps) => {
    if (this.props.receiverList !== prevProps.receiverList) {
      const { receiverList } = this.props;
      await this.setState({ receiverList });
      const displayReceiverList = paginate(
        this.state.receiverList,
        this.state.currentPage,
        this.state.pageSize
      );
      this.setState({ displayReceiverList });
    }
  };

  handlePageChange = async (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    const displayReceiverList = paginate(
      this.state.receiverList,
      pageNumber,
      this.state.pageSize
    );
    await this.setState({ displayReceiverList });
  };

  toggleReceiverStatus = async (receiverId) => {
    let previousReceiverList = [...this.state.receiverList];
    try {
      let receiverList = [...this.state.receiverList];
      receiverList.map((receiver) => {
        if (receiver._id === receiverId) {
          receiver.user.isApproved = !receiver.user.isApproved;
          httpService.post(
            `${process.env.REACT_APP_APIENDPOINT}/customer/changeReceiverStatus`,
            {
              receiverId: receiverId,
              receiverStatus: receiver.user.isApproved,
            }
          );
        }
        return null;
      });
      await this.setState({ receiverList });
    } catch (error) {
      this.setState({ receiverList: previousReceiverList });
    }
  };

  renderReceiverTable = () => {
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;

    let receiverList = this.state.displayReceiverList;
    if (receiverList === null) return;
    return receiverList.map((receiver) => {
      srNo++;
      return (
        <tr key={srNo} role="row">
          <td>{pad(srNo, 3)}</td>
          <td>{receiver.name}</td>
          <td>{receiver.contactNumber}</td>
          <td>{receiver.postalAddress}</td>
          <td>
            <div
              className={`main-toggle main-toggle-success ${
                receiver.user.isApproved ? "on" : "off"
              }`}
            >
              <span
                onClick={() => this.toggleReceiverStatus(receiver._id)}
              ></span>
            </div>
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
                  Your Receiver List
                </h4>
              </div>
              <p className="tx-12 tx-gray-500 mb-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
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
                            <th>Code No</th>
                            <th>Contact Person</th>
                            <th>Contact Number</th>
                            <th>Postal Address</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderReceiverTable()}</tbody>
                      </table>
                      <div className="row">
                        <div className="col-sm-12">
                          <Pagination
                            currentPage={this.state.currentPage}
                            totalItemsCount={this.state.receiverList.length}
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

export default CustomerReceiverListDisplayCard;
