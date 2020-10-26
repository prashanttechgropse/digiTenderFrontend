import React from "react";
import TenderListDisplayCard from "../../microComponents/customerTenderListDisplay";

const CustomerTenderListDisplayCard = (props) => {
  return (
    <div className="row row-sm">
      <div className="col-xl-12">
        <TenderListDisplayCard
          tenderList={props.tenderList}
          profileType="customer"
        />
      </div>
    </div>
  );
};

export default CustomerTenderListDisplayCard;
