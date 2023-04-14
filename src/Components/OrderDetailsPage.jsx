import React, { useState } from "react";
import Menucards from "./ItemCard";
import { collection, addDoc, getDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const docRef = doc(db, "Restaurants", "Hard Rock Cafe");

function OrderDetailsPage() {
  const [tables, setTables] = useState([]);
  async function readfirebase() {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      //   setRestaurant(docSnap.data())
      setTables(docSnap.data().ordersfromTable);
      console.log("tables", docSnap.data().ordersfromTable);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const handleRead = () => {
    readfirebase();
  };

  const Tabs = Array.from({ length: 6 }, (_, index) => (<Menucards tableno={index+1} />));

  return (
    <div style={{ marginTop: "100px" }}>
      <button onClick={handleRead}>Open Tables</button>
{Tabs}
      {/* {tables.map((data)=>(
        <Menucards tableno={data.tableno} orderdet={data.addedItemList} />
    ))} */}
    </div>
  );
}

export default OrderDetailsPage;
