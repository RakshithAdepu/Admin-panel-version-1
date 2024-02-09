import React  from 'react';
import "../Popup/index.css";
import { GiArchiveRegister } from "react-icons/gi";
import {BiLogInCircle} from "react-icons/bi"
import {MdVerifiedUser} from "react-icons/md"
import {RiFolderReceivedFill} from "react-icons/ri"
import {MdConfirmationNumber} from "react-icons/md"
import {MdOutlineIncompleteCircle} from "react-icons/md"

const Popup = (props) => {
  const { list } = props;

  console.log(list);
  return props.trigger ? (
    <div>
      <div className="popupContInside">
        <div className="listContOuter">
          <div className="row">
            <div className="ListCont">
              <h2 className="headingIntheListCont">{list.registeredPhotographers}</h2>
              <div className="IconsCont">
                <GiArchiveRegister className="iconSize" />
              </div>
              <p className="paraInListCont">Photographers<br/> registered today</p>
            </div>
            <div className="ListCont">
              <h2 className="headingIntheListCont">{list.numberOfbookings}</h2>
              <div className="IconsCont">
                <BiLogInCircle className="iconSize" />
              </div>
              <p className="paraInListCont">Orders received <br/> today</p>
            </div>
            <div className="ListCont">
              <h2 className="headingIntheListCont">{list.photographersVerifiedPerDay}</h2>
              <div className="IconsCont">
                <MdVerifiedUser className="iconSize" />
              </div>
              <p className="paraInListCont">Photographers<br/> verified today</p>
            </div>
            
          </div>
          <div className="rowBottom">
          <div className="ListCont">
              <h2 className="headingIntheListCont">{list.numberOfOrdersOnGoingOnTheDay}</h2>
              <div className="IconsCont">
                <RiFolderReceivedFill className="iconSize" />
              </div>
              <p className="paraInListCont">On going order's <br/> today</p>
            </div>
            <div className="ListCont">
              <h2 className="headingIntheListCont">{list.confirmedOrders}</h2>
              <div className="IconsCont">
                <MdConfirmationNumber className="iconSize" />
              </div>
              <p className="paraInListCont">Order's<br/> confirmed today</p>
            </div>
            <div className="ListCont">
              <h2 className="headingIntheListCont">{list.ordersCompleted}</h2>
              <div className="IconsCont">
                <MdOutlineIncompleteCircle className="iconSize" />
              </div>
              <p className="paraInListCont">Order's completed<br/> today</p>
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
