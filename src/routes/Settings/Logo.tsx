import React, { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Main() {

  const [show, setShow] = useState(false);
  return (
    <div className="w-14 max-h-14 relative" onMouseEnter={() => {setShow(true)}} onMouseLeave={() => {setShow(false)}}>
      <div className={`absolute top-0 ${show?"flex":"hidden"}`} style={{ top: "-50%" }}>
        <EditIcon className="edit-btn text-white px-1 py-1 rounded-tl-lg rounded-bl-lg" />
        <DeleteForeverIcon className="delete-btn text-white px-1 py-1 rounded-tr-lg rounded-br-lg" />
      </div>

      <img className="w-full object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png" alt="logo" />
    </div>
  )
}
