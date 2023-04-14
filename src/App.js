
import "./App.css";
import RestaurantForm from "./Components/Handle";
import { Route, Routes } from "react-router-dom";
import AddMenu from "./Components/AddMenu";
import Navbar from "./Components/Navbar";
import NotFound from "./Components/NotFound";
import OrderDetailsPage from "./Components/OrderDetailsPage";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Routes>
          <Route path="/login"></Route>
          <Route path="/signup"></Route>
          <Route path="/" element={<RestaurantForm />}></Route>
          <Route path="/addmenu" element={<AddMenu />}></Route>
          <Route path="/orderdetails" element={<OrderDetailsPage/> }></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
