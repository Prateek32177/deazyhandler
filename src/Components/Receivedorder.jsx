import React, { useEffect, useState } from "react";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";
import Menucards from "./ItemCard";
import "../App.css";
const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  width: "-webkit-fill-available",
};

const containerCard = {
  backgroundColor: "#1E2026",
  padding: "20px",
  borderRadius: "8px",
  margin: "20px",
  marginTop: "100px",
  overflow: "auto",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  textAlign: "center",
};

export default function OrderList(props) {
  // const docRef = doc(db, "Restaurants", "Hard Rock Cafe");
  // const [ordersList, setOrdersList] = useState([]);
  // async function readfirebase() {
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     // console.log("Document data:", docSnap.data());
  //     setOrdersList(docSnap.data().ordersfromTable);
  //     // return docSnap.data()
  //   } else {
  //     // doc.data() will be undefined in this case
  //     console.log("No such document!");
  //   }
  // }

  // useEffect(()=>{
  //   readfirebase()
  // },[])
  // const show = () => {
  //   readfirebase();
  // };
  return (
    <>
      <div className="dishCard" style={containerCard}>
        {/* <button onClick={show}>Show Order</button> */}
        <pre style={{ color: "white", display: "block", fontSize: "x-large" }}>
          Table No. - {props.tableNumber}
        </pre>
        <div style={cardStyle}>
          <table style={{ width: "inherit", color: "white" }}>
            <tr>
              <td>Item name</td>
              <td>Quantity</td>
              <td>Price</td>
              <td>Food Type</td>
            </tr>
                {props.orderDetail.map((data, index) => (
                  <tr style={{ textAlign: "center" }}>
                    <td style={{ color: "white", fontSize: "15px" }}>
                      {data.itemName}
                    </td>
                    <td style={{ color: "white", fontSize: "15px" }}>
                      {data.quantity}
                    </td>
                    <td>
                      <span
                        style={{
                          borderRadius: "5px",
                          padding: "5px 15px",
                          color: "white",
                          fontSize: "15px",
                          backgroundColor: "#7C40FF",
                        }}
                      >
                        {data.itemPrice}/-
                      </span>
                    </td>
                    <td style={{ color: "white", fontSize: "15px" }}>{}</td>
                  </tr>
                ))}
        
          </table>
        </div>
      </div>
    </>
  );
}
