import React, { Component } from "react";
class SupplierBidCards extends Component {
  state = {};

  calculateDaysLeftToClosingDate = () => {
    var date1 = new Date(this.props.tender.closingDate);
    var date2 = new Date();

    // To calculate the time difference of two dates
    var Difference_In_Time = date1.getTime() - date2.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.ceil(Difference_In_Days);
  };

  calculateDaysLeftToDeliveryDate = () => {
    var date1 = new Date(this.props.tender.deliveryDate);
    var date2 = new Date();

    // To calculate the time difference of two dates
    var Difference_In_Time = date1.getTime() - date2.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.ceil(Difference_In_Days);
  };

  render() {
    const { tender } = this.props;
    return (
      <React.Fragment>
        <div className="row row-sm">
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-primary-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-user tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Customer Name</span>
                      <h2 className="text-white mb-0 tx-20">
                        {tender.createdBy.firstName}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-purple-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-list tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Tender Ref No</span>
                      <h2 className="text-white mb-0 tx-20">
                        {tender._id.toString().substring(18, 24)}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-warning-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-money tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Total Amount</span>
                      <h2 className="text-white mb-0 tx-20">{`R ${tender.budgetAmount}`}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-sm">
          {tender.status === "awarded" ? (
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <div className="card bg-primary-gradient text-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon1 mt-2 text-center">
                        <i className="fa fa-calendar tx-30"></i>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="mt-0 text-right">
                        <span className="text-white">Delivery Date</span>
                        <h2 className="text-white mb-0 tx-20">
                          {new Date(tender.deliveryDate).toDateString()}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <div className="card bg-primary-gradient text-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon1 mt-2 text-center">
                        <i className="fa fa-calendar tx-30"></i>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="mt-0 text-right">
                        <span className="text-white">Closing Date</span>
                        <h2 className="text-white mb-0 tx-20">
                          {new Date(tender.closingDate).toDateString()}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {tender.status === "inProcess" ? (
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <div className="card bg-purple-gradient text-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon1 mt-2 text-center">
                        <i className="fa fa-list tx-30"></i>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="mt-0 text-right">
                        <span className="text-white">
                          Days Left to Closing Date
                        </span>
                        <h2 className="text-white mb-0 tx-20">
                          {this.calculateDaysLeftToClosingDate()}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : tender.status === "awarded" ? (
            <div className="col-lg-6 col-xl-4 col-md-6 col-12">
              <div className="card bg-purple-gradient text-white">
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <div className="icon1 mt-2 text-center">
                        <i className="fa fa-list tx-30"></i>
                      </div>
                    </div>
                    <div className="col-8">
                      <div className="mt-0 text-right">
                        <span className="text-white">
                          Days Left to Delivery Date
                        </span>
                        <h2 className="text-white mb-0 tx-20">
                          {this.calculateDaysLeftToDeliveryDate()}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-warning-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-map-marker tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Delivery Location</span>
                      <h2 className="text-white mb-0 tx-20">
                        {tender.deliveryLocation}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-xl-4 col-md-6 col-12">
            <div className="card bg-primary-gradient text-white">
              <div className="card-body">
                <div className="row">
                  <div className="col-4">
                    <div className="icon1 mt-2 text-center">
                      <i className="fa fa-user tx-30"></i>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="mt-0 text-right">
                      <span className="text-white">Status</span>
                      <h2 className="text-white mb-0 tx-20">
                        {tender.status.toUpperCase()}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SupplierBidCards;
