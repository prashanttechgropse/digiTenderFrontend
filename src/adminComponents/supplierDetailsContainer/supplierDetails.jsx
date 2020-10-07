import React, { Component } from "react";
import { Link } from "react-router-dom";
class SupplierDetails extends Component {
  state = {};

  renderTenderList = () => {
    if (!this.props.supplier.tendersAwarded) return null;

    let srNo = 0;
    let styleOfBadge;
    let tenderList = this.props.supplier.tendersAwarded;
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
          <td>{`#00${srNo}`}</td>
          <td>{tender.createdBy.firstName}</td>
          <td>{tender._id.toString().substring(18, 24)}</td>
          <td>{tender.deliveryDate.toString().substring(0, 10)}</td>
          <td>{tender.budgetAmount}</td>
          <td>
            <span className="badge badge-primary f-14">5 Rating</span>
          </td>
          <td>
            <Link
              to={`/admin/tenderDetails/${tender._id}`}
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
    const { supplier } = this.props;
    if (!supplier) return null;
    return (
      <div className="row row-sm">
        <div className="col-xl-12">
          <div className="card">
            <div className="panel panel-primary tabs-style-2">
              <div className="tab-menu-heading">
                <div className="tabs-menu1">
                  <ul className="nav panel-tabs main-nav-line customer-tabs">
                    <li>
                      <a
                        href="#GeneralDetail"
                        className="nav-link active"
                        data-toggle="tab"
                      >
                        General Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="#BankingDetail"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        Banking Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="#TenderDetail"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        Tender Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="#PaymentDetail"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        Payment Detail
                      </a>
                    </li>
                    <li>
                      <a
                        href="#SubSupplierDetail"
                        className="nav-link"
                        data-toggle="tab"
                      >
                        Supplier Employee Detail
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="panel-body tabs-menu-body main-content-body-right border">
                <div className="tab-content">
                  <div className="tab-pane active" id="GeneralDetail">
                    <div className="card-header pb-0">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mg-b-0 datatable-link">
                          General Detail
                        </h4>
                      </div>
                      <p className="tx-12 tx-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="">
                      <div className="main-contact-info-body p-4 ps">
                        <div className="media-list pb-0">
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Name</label>{" "}
                                <span className="tx-medium">
                                  {supplier.firstName}
                                </span>
                              </div>
                              <div>
                                <label>Reference Number</label>{" "}
                                <span className="tx-medium">
                                  {supplier.idNumber}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Organization Type</label>{" "}
                                <span className="tx-medium">
                                  {supplier.organisationType}
                                </span>
                              </div>
                              <div>
                                <label>ID Number</label>{" "}
                                <span className="tx-medium">
                                  {supplier.idNumber}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Company Name</label>{" "}
                                <span className="tx-medium">
                                  {supplier.companyName}
                                </span>
                              </div>
                              <div>
                                <label>Entity Registration No</label>{" "}
                                <span className="tx-medium">
                                  {supplier.entityRegistrationNo}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> VAT Registration</label>
                                <span className="tx-medium">
                                  {supplier.vatRegistration}
                                </span>
                              </div>
                              <div>
                                <label>VAT Number</label>
                                <span className="tx-medium">
                                  {supplier.vatNumber}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Trading As</label>
                                <span className="tx-medium">
                                  {supplier.tradingAs}
                                </span>
                              </div>
                              <div>
                                <label>Website </label>{" "}
                                <span className="tx-medium">
                                  {supplier.website}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Contact Number</label>{" "}
                                <span className="tx-medium">
                                  {supplier.contactNo}
                                </span>
                              </div>
                              <div>
                                <label>Average Ratting </label>{" "}
                                <span className="tx-medium">5</span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label>Supplier Documnet</label>{" "}
                                <span className="tx-medium">
                                  <a href="#">
                                    <i className="fa fa-file"></i> Download
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="BankingDetail">
                    <div className="card-header pb-0">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mg-b-0 datatable-link">
                          Banking Detail
                        </h4>
                      </div>
                      <p className="tx-12 tx-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="">
                      <div className="main-contact-info-body p-4 ps">
                        <div className="media-list pb-0">
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label>Supplier Name</label>{" "}
                                <span className="tx-medium">
                                  {supplier.firstName}
                                </span>
                              </div>
                              <div>
                                <label>Contact Number</label>{" "}
                                <span className="tx-medium">
                                  {supplier.contactNo}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label>Email Id</label>{" "}
                                <span className="tx-medium">
                                  {supplier.user.emailId}
                                </span>
                              </div>
                              <div>
                                <label>Bank Name</label>{" "}
                                <span className="tx-medium">
                                  {supplier.bankDetails.bankName}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Account Number</label>
                                <span className="tx-medium">
                                  {supplier.bankDetails.accountNo}
                                </span>
                              </div>
                              <div>
                                <label>Account Type</label>
                                <span className="tx-medium">
                                  {supplier.bankDetails.accountType}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="media">
                            <div className="media-body">
                              <div>
                                <label> Branch Code</label>{" "}
                                <span className="tx-medium">
                                  {supplier.bankDetails.branchCode}
                                </span>
                              </div>
                              <div>
                                <label>Attach Documnet</label>{" "}
                                <span className="tx-medium">
                                  <a href="#">
                                    <i className="fa fa-file"></i> Download
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="TenderDetail">
                    <div className="card-header pb-0">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mg-b-0 datatable-link">
                          Tender List
                        </h4>
                      </div>
                      <p className="tx-12 tx-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
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
                                    <th>Sr.No</th>
                                    <th>Customer Name</th>
                                    <th>Reference No</th>
                                    <th>Delivery Date</th>
                                    <th>Total Price</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>{this.renderTenderList()}</tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="PaymentDetail">
                    <div className="card-header pb-0">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mg-b-0 datatable-link">
                          Payment List
                        </h4>
                      </div>
                      <p className="tx-12 tx-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div
                          id="example2_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table text-md-nowrap dataTable"
                                id="example2"
                              >
                                <thead>
                                  <tr role="row">
                                    <th>Sr.No</th>
                                    <th>Receiver Name</th>
                                    <th>Delivery Date</th>
                                    <th>Customer Name</th>
                                    <th>Total C0mmision</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr role="row">
                                    <td>#1001</td>
                                    <td>Imran Khan</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>$1200</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-payment-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr role="row">
                                    <td>#1002</td>
                                    <td>Imran Khan</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>$1200</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-payment-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr role="row">
                                    <td>#1003</td>
                                    <td>Imran Khan</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>$1200</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-payment-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr role="row">
                                    <td>#1004</td>
                                    <td>Imran Khan</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>$1200</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/supplier-payment-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="SubSupplierDetail">
                    <div className="card-header pb-0">
                      <div className="d-flex justify-content-between">
                        <h4 className="card-title mg-b-0 datatable-link">
                          Supplier Employee List
                        </h4>
                      </div>
                      <p className="tx-12 tx-gray-500 mb-2">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="card-body">
                      <div className="table-responsive">
                        <div
                          id="example3_wrapper"
                          className="dataTables_wrapper dt-bootstrap4"
                        >
                          <div className="row">
                            <div className="col-sm-12">
                              <table
                                className="table text-md-nowrap dataTable"
                                id="example3"
                              >
                                <thead>
                                  <tr role="row">
                                    <th>Sr.No</th>
                                    <th>Employee Name</th>
                                    <th>Tender Title</th>
                                    <th>Delivery Date</th>
                                    <th>Customer Name</th>
                                    <th>Delivery Address</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr role="row">
                                    <td>#1002</td>
                                    <td>Hamid Ansari</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>Mall Road Dubai UAE</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/subsupplier-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr role="row">
                                    <td>#1003</td>
                                    <td>Hamid Ansari</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>Mall Road Dubai UAE</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/subsupplier-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                  <tr role="row">
                                    <td>#1004</td>
                                    <td>Hamid Ansari</td>
                                    <td>Mobile Phones</td>
                                    <td>20-18-2020</td>
                                    <td>Mo Danish</td>
                                    <td>Mall Road Dubai UAE</td>
                                    <td>
                                      <a
                                        href="https://www.goinstablog.com/goinstablog.com/sumitdesign/design/digibids.com/admin/subsupplier-detail"
                                        className="detail-icons"
                                      >
                                        <i className="fa fa-eye"></i>
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
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
        </div>
      </div>
    );
  }
}

export default SupplierDetails;
