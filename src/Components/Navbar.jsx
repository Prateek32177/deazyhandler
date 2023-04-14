import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import zIndex from "@mui/material/styles/zIndex";
// const anchorStyle = { padding: "20px", color: "white", letterSpacing: "2px" };
import Logo from "./Logo";
const navLinks = [
  {
    linkName:"Home",
    linkPath:"/"
},
    {
        linkName:"Food Menu",
        linkPath:"/addmenu"
    },
    {
        linkName:"Order Details",
        linkPath:"/orderdetails"
    },

]

function Navbar() {

    const [state, setState] = React.useState({
        top: false,
      });
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,m:"100px auto",color:"white"}}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >

            {navLinks.map((link) => (
                <Link to={link.linkPath}>
                 <p style={{padding:'20px',letterSpacing:"3px",fontSize:"large",textDecoration:"none"}}>{link.linkName}</p>
                </Link>
          
            ))}
    
        </Box>
      );
    

  return (
    <div
      style={{
        background: "transparent",
        display: "flex",
        position: "fixed",
        width: "100%",
        backdropFilter: "blur(7px)",
        alignItems: "center",
        justifyContent: "space-between",
        top:0,
        height:"80px",
        zIndex:4
      }}
    >
 <Logo/>
      {/* <nav style={{ marginRight: "20px" }}>
        <a style={anchorStyle}>AGENDA</a>
        <a style={anchorStyle}>PLACES</a>
        <a style={anchorStyle}>CONTACTS</a>

      </nav> */}
   {
    state.top? <CloseIcon onClick={toggleDrawer('top', false)} style={{color:"white",width:"35px",height:"35px",marginRight: "20px"}}/>:
    <MenuIcon onClick={toggleDrawer('top', true)} style={{color:"white",width:"35px",height:"35px",marginRight: "20px"}}/>
   }
    
   


          <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            sx={{zIndex:0}}
            style={{textAlign:"center"}}
      
                PaperProps={{
                    sx: {
                     backgroundColor:"#1E2026"
                    }
                  }}
            
          >
            {list('top')}
          </Drawer>

    </div>
  );
}

export default Navbar;