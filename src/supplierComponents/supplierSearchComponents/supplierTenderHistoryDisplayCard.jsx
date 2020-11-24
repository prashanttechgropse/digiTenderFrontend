import React, { Component } from "react";
import { paginate } from "../../utilities/paginate";
import Pagination from "../../microComponents/pagination";
import pad from "../../services/padding";
import { Link } from "react-router-dom";
class SupplierTenderHistoryDisplayCard extends Component {
  state = {
    tenderList: [],
    displayTenderList: [],
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
    const tenderList = this.state.displayTenderList;
    if (tenderList === null) return;
    let srNo = (this.state.currentPage - 1) * this.state.pageSize;

    return tenderList.map((tender) => {
      srNo++;

      return (
        <tr role="row" key={srNo}>
          <td>{pad(srNo, 3)}</td>
          <td>
            <Link
              to={
                tender.status === "inProcess"
                  ? `/supplier/tenderDetails/${tender._id}`
                  : `/supplier/myBidDetails/${tender._id}`
              }
            >
              {tender._id.toString().substring(18, 24)}
            </Link>
          </td>
          <td>{new Date(tender.closingDate).toDateString()}</td>
          <td>{`${tender.createdBy.firstName}`}</td>
          <td>{tender.deliveryLocation}</td>

          <td>{`R ${tender.acceptedBidAmount}`}</td>
          <td>
            <span className="badge badge-success f-14">{`${tender.status.toUpperCase()}`}</span>
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
                  History of Tenders
                </h4>
              </div>
              <p className="tx-12 tx-gray-500 mb-2">
                {/*Lorem Ipsum is simply dummy typesetting industry.*/}
              </p>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <div>
                  <div className="row">
                    <div className="col-sm-12">
                      <table className="table text-md-nowrap">
                        <thead>
                          <tr role="row">
                            <th>Sr no</th>
                            <th>Tender I'd</th>
                            <th>Closing Date</th>
                            <th>Customer Name</th>
                            <th>Location</th>
                            <th>Amount</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderTenderList()}</tbody>
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

export default SupplierTenderHistoryDisplayCard;
