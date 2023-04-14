import React from "react";
// import "../App.css"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import OrderList from "./Receivedorder";

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   // width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

const cardStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#1E2026",
  padding: "20px",
  borderRadius: "20px",
  margin: "90px auto",
  overflow: "auto",
  marginTop: "90px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
  width: "max-content",
};

function Menucards(props) {
  const { tableno,orderdet } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="dishCard" style={cardStyle}>
        <div className="dishDescp">
          <h5>TABLE NO. : {tableno}</h5>
          <span
            style={{
              borderRadius: "5px",
              padding: "5px 15px",
              color: "white",
              margin: "20px",
              fontSize: "15px",
              backgroundColor: "#7C40FF",
              display: "block",
            }}
          >
            Order Received
          </span>
          <button onClick={handleOpen}>Review Order & Accept</button>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <OrderList tableNumber = {tableno} orderDetail = {orderdet} />
      </Modal>
    </>
  );
}

export default Menucards;
