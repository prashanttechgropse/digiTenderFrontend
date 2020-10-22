import React, { Component } from "react";
import pad from "../../services/padding";
import httpService from "../../services/httpService";
import { Link } from "react-router-dom";

class ParticularCustomerPaymentList extends Component {
  state = {
    customerPaymentList: [],
  };
  componentDidMount = async () => {
    const { data } = await httpService.get(
      `${process.env.REACT_APP_APIENDPOINT}/admin/customerPaymentList/${this.props.match.params.customerId}`
    );
    this.setState({ customerPaymentList: data.customerPaymentList });
  };

  renderCustomerPaymentList() {
    let srNo = 0;
    return this.state.customerPaymentList.map((listItem) => {
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
          <td>{listItem.tenderAmount}</td>
          <td>
            <span
              className={`badge ${
                listItem.paidByCustomer ? "badge-success" : "badge-danger"
              } f-14`}
            >
              {listItem.paidByCustomer ? "paid" : "Not Paid"}
            </span>
          </td>
          <td>
            <Link
              to={`/admin/customer-payment-detail/${listItem._id}`}
              className="detail-icons"
            >
              <i className="fa fa-eye"></i>
            </Link>
          </td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="tab-pane" id="PaymentDetail">
        <div className="card-header pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="card-title mg-b-0 datatable-link">
              Customer Payment List
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
                  <table className="table text-md-nowrap dataTable">
                    <thead>
                      <tr role="row">
                        <th>Sr.No</th>
                        <th>Name</th>
                        <th>Tender Reference Number</th>
                        <th>Delivery Date</th>
                        <th>Total Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderCustomerPaymentList()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ParticularCustomerPaymentList;
