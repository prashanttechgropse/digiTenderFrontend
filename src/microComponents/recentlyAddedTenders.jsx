import React, { Component } from "react";
import config from "../config.json";
import httpService from "../services/httpService";
import { toast } from "react-toastify";

class RecentlyAddedTenders extends Component {
  state = { tenders: "" };

  componentDidMount = async () => {
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/recentTenders`
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
      if (tender.status === "paid") styleOfBadge = "success";
      else if (tender.status === "cancelled") styleOfBadge = "danger";
      else if (tender.status === "awarded") styleOfBadge = "primary";
      else {
        styleOfBadge = "warning";
      }
      return (
        <tr role="row">
          <td>{`#000${srNo}`}</td>
          <td>
            <a href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/supplier/tender-detail">
              {tender._id.toString().substring(18, 24)}
            </a>
          </td>
          <td>{`${tender.creationDate.toString().substring(0, 10)}`}</td>
          <td>{tender.createdBy}</td>
          <td>{tender.deliveryLocation}</td>
          <td>{`${tender.budgetAmount}USD`}</td>
          <td>
            <span className={`badge badge-${styleOfBadge} f-14`}>
              {tender.status}
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
