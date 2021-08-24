import { IconButton, Menu, MenuItem } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import { useState } from 'react';
import './App.css';

function App() {

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
  const open = Boolean(anchorEl);

  return (
    <div className="App">
      <div
        className="LanguageButton"
      >
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

      <div className="Title">{lang==="hun"?"Pisony":"Pisont"}</div>
      <div className="Buttons">
        <div>{lang==="hun"?"Szoba létrehozása":"Create Room"}</div>
        <div>{lang==="hun"?"Csatlakozás":"Connect"}</div>
        <div>{lang==="hun"?"Szabályok":"Rules"}</div>
      </div>
    </div>
  );
}

export default App;
