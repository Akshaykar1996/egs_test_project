import React from "react";
import rating from "../../image/logos/rating.svg";
import call from "../../image/logos/call.svg"
import greenrating from "../../image/logos/greenrating.svg";
import Orangecall from "../../image/logos/orangeCall.svg"

export const StaffText = (props) => {
  const {opencard,greenstar,threeDforOpen,callX,callXrequest,orangeCall} = props;
  return (
    <>
      <div className={`stafText ${opencard}` }>
        <div className="star_days">
          <p>7 days & 6 nights</p>
          <p>
            <img src={greenstar ? greenrating : rating} alt="" /> 4.5(37)
          </p>
        </div>
        <h3 className="HandPickedProductCard_name">
          Grand Seychelles Honeymoon Tour with Flights
        </h3>
        <div className={`threeD ${threeDforOpen}`}>
          <div className="threeDInnercontaint">
            <div
              className="textLeft"
              id="productDestinationList-highlights-of-seychelles"
            >
              <div class="HandPickedProductCard_destinationBox__7lsyc">
                <span class="HandPickedProductCard_destinationCountLabel__a9_QV">
                  3D
                </span>
                <span class="HandPickedProductCard_destinationNameLabel__x9FcI">
                  Praslin
                </span>
                <span class="HandPickedProductCard_destinationNameDivider__WjttG">
                  {" "}
                  .{" "}
                </span>
              </div>
              <div class="HandPickedProductCard_destinationBox__7lsyc">
                <span class="HandPickedProductCard_destinationCountLabel__a9_QV">
                  4D
                </span>
                <span class="HandPickedProductCard_destinationNameLabel__x9FcI">
                  Mahe Island
                </span>
              </div>
            </div>
            <div class="HandPickedProductCard_remainingDestinationCountBox__vsrY5">
              ...
              <span class="HandPickedProductCard_remainingDestinationCount__ImNlY">
                +1
              </span>
            </div>
          </div>
        </div>

        <div className="line">
        </div>
        <div className="price">
            <h3>INR 2,77,600</h3>
            <p>INR 2,77,600</p>
            <div className="savePrice">
            SAVE <span>INR 2,77,600</span>
            </div>
        </div>

        <div className="callContainer">
            <div className={`call ${callX}`}>
                <img src={orangeCall ? Orangecall : call} alt="" />
            </div>
            <div  className={`callRequest ${callXrequest}`}> <p>Request Callback</p></div>
        </div>
      </div>
    </>
  );
};
