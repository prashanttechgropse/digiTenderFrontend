import React, { Component } from "react";
import httpService from "../services/httpService";
import config from ".././config.json";
import { toast } from "react-toastify";
import BidItemListRow from "../microComponents/bidItemList";
import { acceptTender } from "../services/tenderService";
class SupplierQuotationDetails extends Component {
  state = { bid: null };

  async componentDidMount() {
    console.log(this.props.match.params.bidId);
    if (!this.props.match.params.bidId) return;
    try {
      const { data } = await httpService.get(
        `${config.apiendpoint}/bids/${this.props.match.params.bidId}`
      );
      await this.setState({ bid: data.bid });
    } catch (error) {
      toast.error(error.message);
      this.history.push("/customer");
      return;
    }
  }

  tenderAccept = async () => {
    const { bid } = this.state;
    let reqDetails = {};
    reqDetails.bidId = bid._id;
    reqDetails.tenderId = bid.tender._id;
    reqDetails.supplierId = bid.createdBy._id;
    await acceptTender(reqDetails);
    this.props.history.push("/customer");
    return;
  };

  render() {
    const { bid } = this.state;
    if (bid === null) return null;
    return (
      <React.Fragment>
        <div class="container-fluid">
          <div class="breadcrumb-header justify-content-between">
            <div class="my-auto">
              <div class="d-flex">
                <h4 class="content-title mb-0 my-auto">Tender</h4>
                <span class="text-muted mt-1 tx-13 ml-2 mb-0">
                  / Supplier Quotation
                </span>
              </div>
            </div>
          </div>
          <div class="row row-sm">
            <div class="col-lg-6 col-xl-4 col-md-6 col-12">
              <div class="card bg-primary-gradient text-white">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <div class="icon1 mt-2 text-center">
                        <i class="fa fa-list tx-30"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="mt-0 text-right">
                        <span class="text-white">Tender Ref No</span>
                        <h2 class="text-white mb-0 tx-20">
                          {bid.tender._id.toString().substring(18, 24)}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-4 col-md-6 col-12">
              <div class="card bg-danger-gradient text-white">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <div class="icon1 mt-2 text-center">
                        <i class="fa fa-calendar tx-30"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="mt-0 text-right">
                        <span class="text-white">Closing Date</span>
                        <h2 class="text-white mb-0 tx-20">
                          {bid.tender.closingDate.toString().substring(0, 10)}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-4 col-md-6 col-12">
              <div class="card bg-warning-gradient text-white">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <div class="icon1 mt-2 text-center">
                        <i class="fa fa-map-marker tx-30"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="mt-0 text-right">
                        <span class="text-white">Delivery Location</span>
                        <h2 class="text-white mb-0 tx-20">
                          {bid.tender.deliveryLocation}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-4 col-md-6 col-12">
              <div class="card bg-success-gradient text-white">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <div class="icon1 mt-2 text-center">
                        <i class="fa fa-user tx-30"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="mt-0 text-right">
                        <span class="text-white">Supplier Name</span>
                        <h2 class="text-white mb-0 tx-20">
                          {bid.createdBy.firstName}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-xl-4 col-md-6 col-12">
              <div class="card bg-purple-gradient text-white">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4">
                      <div class="icon1 mt-2 text-center">
                        <i class="fa fa-phone tx-30"></i>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="mt-0 text-right">
                        <span class="text-white">Supplier Contact</span>
                        <h2 class="text-white mb-0 tx-20">
                          {bid.createdBy.contactNumber}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row row-sm">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="d-flex justify-content-between">
                    <h4 class="card-title mg-b-0 datatable-link">
                      Suppliers Quotation For Tender
                    </h4>
                  </div>
                  <p class="tx-12 tx-gray-500 mb-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <div
                      id="example1_wrapper"
                      class="dataTables_wrapper dt-bootstrap4"
                    >
                      <div class="row">
                        <div class="col-sm-12">
                          <table
                            class="table text-md-nowrap dataTable"
                            id="example1"
                          >
                            <thead>
                              <tr role="row">
                                <th>Sr. No</th>
                                <th>Category</th>
                                <th>Item / Description</th>
                                <th>Qty</th>
                                <th>Unit Price</th>
                                <th>Total Amount</th>
                              </tr>
                            </thead>
                            <tbody>
                              {bid.itemList.map((item, index) => {
                                return (
                                  <BidItemListRow
                                    key={index}
                                    item={item}
                                    index={index}
                                  />
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {bid.tender.status === "inProcess" ? (
              <div class="col-lg-12 col-md-12">
                <div class="card" id="button33">
                  <div class="card-body">
                    <div class="text-wrap">
                      <div class="row">
                        <div class="col-sm-12 col-md-12">
                          <button
                            data-target="#tenderaccept"
                            data-toggle="modal"
                            class="btn btn-primary-gradient btn-block"
                            disabled={bid.tender.status !== "inProcess"}
                          >
                            Accept Tender
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          <div class="modal" id="tenderaccept">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content tx-size-sm">
                <div class="modal-body tx-center pd-y-20 pd-x-20">
                  <button
                    aria-label="Close"
                    class="close"
                    data-dismiss="modal"
                    type="button"
                  >
                    <span aria-hidden="true">×</span>
                  </button>{" "}
                  <i class="fa fa-check-circle tx-100 tx-orange lh-1 mg-t-20 d-inline-block"></i>
                  <h4 class="tx-orange tx-semibold mg-b-20">
                    Congratulations !
                  </h4>
                  <p class="mg-b-20 mg-x-20">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                  <button
                    onClick={this.tenderAccept}
                    aria-label="Close"
                    class="btn ripple btn-success pd-x-25"
                    data-dismiss="modal"
                    type="button"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SupplierQuotationDetails;
