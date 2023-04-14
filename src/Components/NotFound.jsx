import React from 'react'
import PageNotFound from "../asset/404.svg"
function NotFound() {
  return (
    <div style={{margin:"100px auto"}} >
      <pre style={{display:"block",fontSize:"xxx-large",margin:"20px 0"}}>Page Not Found !</pre>
      <pre style={{display:"block",fontSize:"xx-large",margin:"20px 0"}}>Error 404...</pre>
<img style={{width:"40vw"}} src={PageNotFound}/>
    </div>
  )
}

export default NotFound