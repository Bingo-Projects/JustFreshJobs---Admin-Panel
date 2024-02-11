import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import "./css/header.css";
import { useRef } from 'react';

export default function Header(props: { dashToggle: any }) {
  const holder: any = useRef(null);

  const activateInput = () => {
    (holder.current as HTMLDivElement).classList.add("input");

    function revertInput(e: any): void {
      if (!(
        e.target.classList.contains("search-div") || 
        e.target.parentElement.classList.contains("search-div") || 
        e.target.parentElement.parentElement.classList.contains("search-div")
      ))
      {
        (holder.current as HTMLDivElement).classList.remove("input");
        document.body.removeEventListener("click", revertInput);
      }
    }

    document.body.addEventListener("click", revertInput);
  }

  return (
    <header className='flex w-full items-center p-4 bg-white'>
      <div className="flex items-center w-fit">
        <button className="hamburger" onClick={props.dashToggle}>
          <MenuOutlinedIcon />
        </button>
      </div>

      <div ref={holder} className="holder flex items-center ml-auto">
        <div className="search-div">
          <SearchOutlinedIcon />
          <input type="text" placeholder='Search...' onClick={activateInput} />
        </div>

        <div className="notification" onClick={(e: any) => e.currentTarget.classList.toggle("active")}>
          <NotificationsNoneOutlinedIcon />
          <span className="red" />
        </div>
      </div>
    </header>
  )
}
