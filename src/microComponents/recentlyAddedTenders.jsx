import React, { Component } from "react";

import httpService from "../services/httpService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import pad from "../services/padding";
class RecentlyAddedTenders extends Component {
  state = { tenders: "" };

  componentDidMount = async () => {
    try {
      const { data } = await httpService.get(
        `${process.env.REACT_APP_APIENDPOINT}/recentTenders`
      );
      const tenders = data.tenders;
      this.setState({ tenders });
    } catch (error) {
      toast.error(error.message);
      return;
    }
  };

  renderRecentAddedTenders = () => {
    if (this.state.tenders === "") return;
    let srNo = 0;
    let styleOfBadge;
    let tenderList = this.state.tenders.filter(
      (tender) => tender.isPublished === true
    );
    return tenderList.map((tender) => {
      srNo++;
      if (tender.status === "completed") styleOfBadge = "success";
      else if (tender.status === "cancelled" || tender.status === "rejected")
        styleOfBadge = "danger";
      else if (tender.status === "awarded") styleOfBadge = "primary";
      else {
        styleOfBadge = "warning";
      }
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
          <td>{`${new Date(tender.closingDate).toDateString()}`}</td>
          <td>
            {tender.createdBy.organisationType === "Sole Trader"
              ? tender.createdBy.firstName
              : tender.createdBy.companyName}
          </td>
          <td>{tender.deliveryLocation}</td>
          <td>{`R ${tender.budgetAmount} `}</td>
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
                  <tbody>{this.renderRecentAddedTenders()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentlyAddedTenders;
