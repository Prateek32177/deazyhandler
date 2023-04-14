import React, { useState, useEffect } from "react";
import "../App.css";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import Divider from '@mui/material/Divider';
import Profileimage from "../asset/Art.svg";
import MessageModal from "./MessageModal";

export const tabDescp = [
  {
    label: "Starter",
  },
  {
    label: "Chinese",
  },
  {
    label: "Continential",
  },
  {
    label: "Main Course",
  },
  {
    label: "Beverages",
  },
];
const docRef = doc(db, "Restaurants", "Hard Rock Cafe");

const infoCardStyle = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap:"wrap",
  width: "80vw",
  background: "white",
  margin: "auto",
  marginTop: "100px",
  padding: "30px",
  borderRadius:"10px",
  color:"black",
  boxShadow: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
  textAlign:'left'
};

const RestaurantForm = () => {

const [showMessage,setShowMessage] = useState(false)

  const [restaurant, setRestaurant] = useState({
    name: "",
    cuisine: "",
    address: "",
    instagramLink: "",
    facebookLink: "",
    googleMapLocation: "",
    contactNo: "",
    tables:[],
    menu: [],
    menuCategories: tabDescp,
    addedItemList: [],
  });
  async function readfirebase() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      //   setRestaurant(docSnap.data())
      setRestaurant({ ...docSnap.data()});
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  useEffect(() => {
    readfirebase();
  }, []);

  const RestaurantDetails = collection(db, "Restaurants");

  function addToFirebase(e) {
    setDoc(doc(RestaurantDetails, "Hard Rock Cafe"), restaurant);
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if(name==="tables")
    {
      setRestaurant({ ...restaurant, [name]:Array(value).fill({addedItemList:[]}) });
    }
    else
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(restaurant);
    // alert("Submitted Successfully");
    addToFirebase();
    setShowMessage(true)
    // send the restaurant details and food menu to the server or any data source
  };

  return (
    <div style={infoCardStyle}>
      <MessageModal show={showMessage}/>
      <div style={{ width: "40%",textAlign:"center" }}>
        <h4 style={{letterSpacing:"3px"}}>Enter Restaurant Details</h4>
      <img style={{ width: "100%"}} src={Profileimage}></img>

      </div>

     <Divider orientation="vertical" flexItem>
    DineEazy.
      </Divider> 
      <form  onSubmit={handleSubmit}>
        <div style={{display:"flex",marginTop: "80px",justifyContent:"space-between",flexWrap:"wrap" }}>
        <div style={{margin:"0 10px" }}>
          <div >
            <label htmlFor="name">Restaurant Name</label>
            <input
              type="text"
              name="name"
              value={restaurant.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="cuisine">Cuisine</label>
            <input
              type="text"
              name="cuisine"
              value={restaurant.cuisine}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              value={restaurant.address}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="instagramLink">Instagram Link</label>
            <input
              type="text"
              name="instagramLink"
              value={restaurant.instagramLink}
              onChange={handleInputChange}
            />
          </div>
         </div>
         <div style={{margin:"0 10px" }}>
          <div>
            <label htmlFor="facebookLink">Facebook Link</label>
            <input
              type="text"
              name="facebookLink"
              value={restaurant.facebookLink}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="googleMapLocation">Google Map Location</label>
            <input
              type="text"
              name="googleMapLocation"
              value={restaurant.googleMapLocation}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="contactNo">Contact No</label>
            <input
              type="text"
              name="contactNo"
              value={restaurant.contactNo}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="tables">Number Of Tables In Restaurant</label>
            <input
             placeholder="Enter Number Of Tables For Service"
              type="number"
              name="tables"
              value={restaurant.tables.length}
              onChange={handleInputChange}
            />
          </div>
        </div>
        </div>
        <button style={{background:"black",color:"white",margin:"10px"}} type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>

    </div>
  );
};

export default RestaurantForm;
