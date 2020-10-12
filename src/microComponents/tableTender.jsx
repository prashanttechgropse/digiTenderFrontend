import React, { Component } from "react";
class TableTender extends Component {
  state = {};
  render() {
    const tenders = this.props;
    return (
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
        <tbody>
          {tenders.map((tender) => {
            return (
              <tr role="row">
                <td>#0001</td>
                <td>
                  <a href="/supplier/tender-detail">#T686868</a>
                </td>
                <td>10-07-2020</td>
                <td>Alex Smith</td>
                <td>H/123, Green Park</td>
                <td>5000.00 USD</td>
                <td>
                  <span className="badge badge-primary f-14">New</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default TableTender;
