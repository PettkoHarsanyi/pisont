import { IconButton, Menu, MenuItem } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import "./Home.css";

function Home(){

  const ITEM_HEIGHT = 48;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = (lang) => {
    setLang(lang)
    setAnchorEl(null);
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const [lang, setLang] = useState("hun");
  const [redirect, setRedirect] = useState(null);
  const open = Boolean(anchorEl);

  const handleRedirect = (url) => {
    setRedirect(url)
  }

  if(redirect != null){
    return(
      <Redirect to={redirect} />
    )
  }

  return(
    <>
      <div className="Home">
      <div className="LanguageButton">
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          style={{color:"orange"}}
          onClick={handleClick}
        >
          <LanguageIcon fontSize="large" />
        </IconButton>
      </div>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem selected={lang==="hun"} onClick={()=>handleClose("hun")}>{lang==="hun"?"magyar":"hungarian"}</MenuItem>
        <MenuItem selected={lang==="eng"} onClick={()=>handleClose("eng")}>{lang==="hun"?"angol":"english"}</MenuItem>
      </Menu>

      <div className="Title">{lang==="hun"?"Pizsony":"Pisont"}</div>
      <div className="Buttons">
        <div onClick={()=>handleRedirect("create")}>{lang==="hun"?"Létrehozás":"Create Room"}</div>
        <div onClick={()=>handleRedirect("connect")}>{lang==="hun"?"Csatlakozás":"Connect"}</div>
        <div onClick={()=>handleRedirect("rules")}>{lang==="hun"?"Szabályok":"Rules"}</div>
      </div>
    </div>
  </>
  )
}

export default Home;
