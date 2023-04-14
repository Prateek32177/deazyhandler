import React, { useState, useEffect } from "react";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import IconButton from "@mui/material/IconButton";
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

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1E2026",
  padding: "20px",
  borderRadius: "8px",
  margin: "20px",
  marginTop: "100px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  width: "-webkit-fill-available",
  overflow:"auto"
};

const iconStyle = {
  width: "20px",
  height: "20px",
  padding: "6px",
};

function AddMenu() {
  const [edit, setEdit] = useState(true);
  const [restaurant, setRestaurant] = useState({
    name: "",
    cuisine: "",
    address: "",
    instagramLink: "",
    facebookLink: "",
    googleMapLocation: "",
    contactNo: "",
    menu: [],
    menuCategories: tabDescp,
    addedItemList: [],
  });

  const handleMenuChange = (event, index) => {
    const menu = [...restaurant.menu];
    menu[index][event.target.name] = event.target.value;
    setRestaurant({ ...restaurant, menu });
  };

  const docRef = doc(db, "Restaurants", "Hard Rock Cafe");

  async function handleShow() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      //   setRestaurant(docSnap.data())
      setRestaurant({ ...restaurant, menu: docSnap.data().menu });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  // useEffect(()=>{
  //     readfirebase()
  // },[])

  const RestaurantDetails = collection(db, "Restaurants");

  const addMenuItem = () => {
    setRestaurant({
      ...restaurant,
      menu: [
        ...restaurant.menu,
        {
          itemName: "",
          itemPrice: "",
          type: "",
          category: "",
          descp: "",
          quantity: 0,
          img: "",
        },
      ],
    });
  };
  function addToFirebase(e) {
    setDoc(doc(RestaurantDetails, "Hard Rock Cafe"), restaurant);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(restaurant);
    alert("Submitted Successfully");
    addToFirebase();
    // send the restaurant details and food menu to the server or any data source
  };

  return (
    <div style={{ marginTop: "80px" }}>
      <pre style={{fontSize:"x-large"}}>~ Food Menu ~</pre>
      <button onClick={handleShow}>Show Menu</button>
      <div className="dishCard" style={cardStyle}>
        <table style={{ width: "inherit" }}>
          <tr>
            <td>Item Name</td>
            <td>Item Price</td>
            <td>Food Type</td>
            <td>Food Category</td>
            <td>Food Description</td>
            <td> </td>
          </tr>
          {restaurant.menu.length !== 0 &&
            restaurant.menu.map((data, index) =>
              edit ? (
                <tr>
                  <td>{data.itemName}</td>
                  <td>{data.itemPrice}</td>
                  <td>{data.type}</td>
                  <td>{data.category}</td>
                  <td>{data.descp}</td>
                  <td>
                    <IconButton onClick={()=>setEdit(false)} sx={{color:"white"}} aria-label="edit">
                      <EditIcon style={iconStyle} />
                    </IconButton>
                    <IconButton sx={{color:"white"}} aria-label="delete">
                      <DeleteOutlineIcon style={iconStyle} />
                    </IconButton>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td>
                    <input
                      type="text"
                      style={{background:"transparent",color:"white"}}
                      name="itemName"
                      value={data.itemName}
                      id={`dish-${index}`}
                      onChange={(event) => handleMenuChange(event, index)}
                    />
                  </td>
                  <td>
                    <input
                     style={{background:"transparent",color:"white"}}
                      type="text"
                      name="itemPrice"
                      value={data.itemPrice}
                      id={`price-${index}`}
                      onChange={(event) => handleMenuChange(event, index)}
                    />
                  </td>
                  <td>
                    <input
                     style={{background:"transparent",color:"white"}}
                      type="text"
                      name="type"
                      value={data.type}
                      id={`price-${index}`}
                      onChange={(event) => handleMenuChange(event, index)}
                    />
                  </td>
                  <td>
                    <select
                     style={{background:"transparent",color:"white"}}
                      id="category"
                      name="category"
                      onChange={(event) => handleMenuChange(event, index)}
                    >
                      {tabDescp.map((tab) => (
                        <option style={{color:"grey",padding:"5px"}} value={tab.label}>{tab.label}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    <input
                     style={{background:"transparent",color:"white"}}
                      type="text"
                      name="descp"
                      value={data.descp}
                      id={`price-${index}`}
                      onChange={(event) => handleMenuChange(event, index)}
                    />
                  </td>
                  <td>
                    <button type="button" style={{background:"white"}} >
                     Save
                    </button>
                  </td>
                </tr>
              )
            )}
        </table>
      </div>
      <button style={{margin:"10px"}}  type="button" onClick={addMenuItem}>
                      Add More Items
                    </button>
   
      <button style={{background:"white",margin:"10px"}} type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default AddMenu;
