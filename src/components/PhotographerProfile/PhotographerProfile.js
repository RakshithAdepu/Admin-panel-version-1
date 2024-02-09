import "./index.css";
import Sidebar from "../Sidebar/Sidebar";
import EventDetailsTable from "./EventDetailsTable";
import EquipmentDetailsTable from "./EquipmentDetailsTable";
import CategoryTable from "./CategoryTable";
// ./Images/dashboard/
const PhotographerProfile = () => {
  return (
    <div className="overallContForPhotographerProfile">
      <Sidebar />
      {/* photographer profile cont */}
      <div className="photographerProfileMainCont">
        <h1 className="mainHeadingForPhotographerProfile">
          Photographers Profile
        </h1>
        <div className="profileCont">
          <div className="titleContForprofileCont">
            <h4 className="personalDetailsEle">Personal Details</h4>
            <h6 className="editprofileEle">Edit Profile</h6>
          </div>
          <div className="mainProfileCont">
            {/* profile info part 1 */}
            <div className="mainProfileContPart1">
              <div className="profilePicAndnameCont">
                <img
                  className="profilePicImg"
                  src="./Images/photographerProfile/profilePic.png"
                  alt="logo"
                />
                <div className="nameAndverificationStatus">
                  <h3 className="nameEle">Jane Clayde</h3>
                  <h5 className="verificationStatus">
                    Verified{" "}
                    <span>
                      <img
                        className="verificationStatusIcon"
                        src="./Images/photographerProfile/verifiedIcon.png"
                        alt="log"
                      />
                    </span>
                  </h5>
                </div>
              </div>
              <div className="rowingtheallotherDetails">
                <div className="allOtherDetailsCont">
                  <div className="infoCont">
                    <p className="InfoTop">ID no</p>
                    <p className="InfoBotton">1234</p>
                  </div>
                  <div className="infoCont">
                    <p className="InfoTop">Phone no</p>
                    <p className="InfoBotton">+91 123456789</p>
                  </div>
                  <div className="infoCont">
                    <p className="InfoTop">Email ID</p>
                    <p className="InfoBotton">abcd1234@gmail.com</p>
                  </div>
                </div>
                <div className="allOtherDetailsCont">
                  <div className="infoCont">
                    <p className="InfoTop">Birthdate</p>
                    <p className="InfoBotton">10/05/2023</p>
                  </div>
                  <div className="infoCont">
                    <p className="InfoTop">Joining date</p>
                    <p className="InfoBotton">10/05/2023</p>
                  </div>
                  <div className="infoCont">
                    <p className="InfoTop">Gender</p>
                    <p className="InfoBotton">Female</p>
                  </div>
                </div>
              </div>
            </div>
            {/* profile info part 2*/}
            <div className="mainProfileContPart1">
              <div className="holdAndVerifyCont">
                <button className="buttonForVerify" type="button">
                  Verify
                </button>
                <button className="buttonForHold" type="button">
                  Hold
                </button>
              </div>
              <div className="rowingtheallotherDetails">
                <div className="allOtherDetailsCont">
                  <div className="infoCont">
                    <p className="InfoTop">Approved By</p>
                    <p className="InfoBotton">Bharath Reddy</p>
                  </div>
                  <div className="infoCont">
                    <p className="InfoTop">KYC</p>
                    <p className="InfoBotton">Verified</p>
                  </div>
                </div>
                <div className="allOtherDetailsCont">
                  <div className="infoCont">
                    <p className="InfoTop">Address</p>
                    <p className="InfoBotton">
                      DLF CYBER CITY, 1st Floor, Vasista Bhavan, Opp lane to,
                      APHB Colony, Indira Nagar, Gachibowli, Hyderabad,
                      Telangana 500032
                    </p>
                  </div>
                  <div className="infoCont">
                    <p className="InfoTop">Bio</p>
                    <p className="InfoBotton">
                      Fineant Consultant Service Private Limited is a Private
                      incorporated on 10 February 2022. It is classified as
                      Non-govt company.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* event details cont */}
        <div className="eventDetails">
          <div className="eventTitleCont">
            <h1 className="eventdetailsHeading">Event details</h1>
            <div className="eventdetailsScrollbar">
              <h1 className="scrolloftheeventdetails">
                Current Events
                <br />
                <div className="scroller"></div>
              </h1>
              <h1 className="scrolloftheeventdetails">
                History
                <br />
                <div className="scroller"></div>
              </h1>
              <div className="viewallCont">View all</div>
            </div>
          </div>
          <div className="eventDetailsstableCont">
            <EventDetailsTable/>
          </div>
        </div>
        <div className="categoryAndSkills
        cont">
          {/* categories cont */}
          <div className="categoryContInPhotographerProfile">
            <h1 className="categoryTitleInPhotographerProfile">Categories</h1>
            <div className="categoryMainContTable">
              <CategoryTable/>
            </div>
          </div>
          {/* Skills cont */}
          <div className="categoryContInPhotographerProfile">
            <h1 className="categoryTitleInPhotographerProfile">Skills</h1>
            <div className="categoryMainContTable">
              <div className="PreproductionSkillsCont">
                <h1 className="preproductionHeading">Pre-production</h1>
                <ul className="SkillsSubCont">
                  <li className="listItemsOfskills">Lighting</li>
                  <li className="listItemsOfskills">Wedding Photography</li>
                  <li className="listItemsOfskills">Scripting</li>
        

                </ul>
              </div>
              <div className="PreproductionSkillsCont">
                <h1 className="preproductionHeading">Post-production</h1>
                <ul className="SkillsSubCont">
                  <li className="listItemsOfskills">Editing</li>
                  <li className="listItemsOfskills">Color Grading</li>
                  <li className="listItemsOfskills">Poster design</li>
        

                </ul>
              </div>
              
            </div>
          </div>
        </div>
        {/* Equipment Details cont */}
        <div className="eventDetails">
          <div className="eventTitleCont">
            <h1 className="EquipmentHeading">Equipment details</h1>
            <div className="eventdetailsScrollbar">
              <h1 className="scrolloftheeventdetails">
                Equipment
                <br />
                <div className="scroller"></div>
              </h1>
              <h1 className="scrolloftheeventdetails">
                Paid equipment
                <br />
                <div className="scroller"></div>
              </h1>
              {/* <div className="viewallCont">View all</div> */}
            </div>
          </div>
          <div className="eventDetailsstableCont">
            <EquipmentDetailsTable/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographerProfile;
