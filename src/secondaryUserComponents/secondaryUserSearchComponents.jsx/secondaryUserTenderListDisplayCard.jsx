import React, { Component } from "react";
import TenderListDisplayCard from "../../microComponents/customerTenderListDisplay";
class SecondaryUserTenderListDisplayCard extends Component {
  state = {};
  render() {
    return (
      <div className="row row-sm">
        <div className="col-xl-12">
          <TenderListDisplayCard
            tenderList={this.props.tenderList}
            profileType={this.props.profileType}
          />
        </div>
      </div>
    );
  }
}

export default SecondaryUserTenderListDisplayCard;
