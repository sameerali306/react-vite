import React from "react";
function Start() {
    const nameStateVariable=useState("sameer")
   return(
    <>
    <h1>{nameStateVariable[0]}</h1>
    </>
   )
}
export default Start