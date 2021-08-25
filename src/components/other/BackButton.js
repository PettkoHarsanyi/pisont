import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./BackButton.css"

export function BackButton(){
  const [redirect, setRedirect] = useState(null);

  const handleRedirect = (url) => {
    setRedirect(url);
  }

  if(redirect){
    return(
      <Redirect to={redirect} />
    )
  }

  return(
    <div className="BackButton" onClick={()=>handleRedirect("/")}>
      {"< BACK"}
    </div>
  )
}