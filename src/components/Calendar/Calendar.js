import React  from 'react';
import  { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Popup from "../Popup/Popup"
import "./index.css"

// import {BsFillCalendarFill} from "react-icons/bs"

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
//   const[name,setName]=useState()
  const[clicked, setClicked]= useState(false)
  const [item, setItem]= useState()

  const onChangeDate = async(date)=>{
    setStartDate(date)
    // const response = await fetch("https://randomuser.me/api")
    // const data= await response.json()
    //  const nameDetails=(data.results[0].name.first);
     const registeredPhotographers=  Math.floor(Math.random() * 2000)
     const numberOfbookings= Math.floor(Math.random() * 5000)
     const photographersVerifiedPerDay= Math.floor(Math.random() * 500)
     const ordersCompleted= Math.floor(Math.random() * 1000)
     const numberOfOrdersOnGoingOnTheDay= Math.floor(Math.random() * 300)
     const confirmedOrders= Math.floor(Math.random() * 2500)

const list = {registeredPhotographers,numberOfbookings,photographersVerifiedPerDay,ordersCompleted,numberOfOrdersOnGoingOnTheDay,confirmedOrders}
    
     setClicked(true)
     setItem(list)
    //  setName(nameDetails)
  }
  return (
  <div className="mainCont">
      <nav className="navbar">
    
        <DatePicker className="calendar" selected={startDate} onChange={onChangeDate}   />
    
        </nav>

<div  className="popupCont"><Popup trigger={clicked}  list={item}>

</Popup></div>


  </div>
  );
};

export default Calendar