import React, { useRef } from 'react';
import "./css/dashboard.css"
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ApartmentIcon from '@mui/icons-material/Apartment';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import InsertEmoticonOutlinedIcon from '@mui/icons-material/InsertEmoticonOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { useNavigate } from 'react-router-dom';
import { optionIds } from "./index";


type Lists = { name: string, link: string };

function Option(props: { 
  Logo: typeof DataSaverOffIcon,
  title: string, lists?: Lists[],
  link: string, id: string, active?: boolean})
{
  const option: any = useRef(null);
  const navigate = useNavigate();

  const clickOption = (e: any): void => {
    const target = e?.currentTarget as HTMLDivElement;
    const activeOption = document.querySelector(".option.active") as HTMLInputElement;
    if (activeOption) {
      activeOption.classList.remove("active");
    }

    // removing all the active option text highlights
    const highlighted = document.querySelector(".option--text.font-medium");
    if (highlighted) {
      highlighted?.classList.remove("font-medium");
      highlighted?.classList.add("font-light");
    }

    // highlighting the option text if sub-option or dropdown is not clicked
    if (e.target.tagName !== "LI" && e.target.tagName !== "A" && e.target.tagName !== "path" && e.target.tagName !== "svg") {
      const activeList = option?.current?.querySelector("li.active") as HTMLDivElement;
      if (activeList) {
        activeList.classList.remove("active");
      }
      option.current.querySelector(".option--text")?.classList.remove("font-light");
      option.current.querySelector(".option--text")?.classList.add("font-medium");
      navigate(props.link);

    }
    else {
      if (!option.current.querySelector(".option--sub li.active")) {
        option.current.querySelector(".option--text")?.classList.remove("font-light");
        option.current.querySelector(".option--text")?.classList.add("font-medium");
      }
    }

    target.classList.add("active");
  }

  const clickLink = (e: any, link: string): void => {
    const target = e?.currentTarget as HTMLDivElement;
    const activeList = option?.current?.querySelector("li.active") as HTMLDivElement;
    if (activeList) {
      activeList.classList.remove("active");
    }
    target.classList.add("active");
    option.current.querySelector(".option--text")?.classList.remove("font-medium");
    option.current.querySelector(".option--text")?.classList.add("font-light");
    navigate(link);
  }

  const toggleList = (e: any): void => {
    const parent = e.currentTarget.parentElement.parentElement as HTMLDivElement;
    const elementList = parent.querySelector(".option--sub");
    if (e.currentTarget.classList.contains("active")) {
      elementList?.classList?.add("hide");
      e.currentTarget.classList.remove("active");
    }
    else {
      elementList?.classList?.remove("hide");
      e.currentTarget.classList.add("active");
    }
  }

  return (
    <div id={props.id} ref={option} onClick={clickOption} 
    className={`option rounded-lg mt-2 mb-2 ${props.active?"active":""}`} >
      <div className='text-container flex items-center gap-3'>
        <props.Logo className='option--logo' />
        <span className={`option--text ${props.active?"font-medium":"font-light"}`}>{props.title}</span>
        {props.lists && props.lists.length > 1 && <ArrowDropDownOutlinedIcon className='dropdown' onClick={toggleList} />}
      </div>

      {props.lists && <ul className="option--sub hide">
        {props.lists?.map((list: Lists, key: number) => (
          <li onClick={(e) => clickLink(e, list.link)} key={key}>{list.name}</li>
        ))}
      </ul>
      }
    </div>
  )
}


export default function Dashboard(props: { option: string }) {
  return (
    <div className='dashboard bg-main-bg w-max p-3'>
      <div className="main-frame flex items-center gap-3">
        <h1 className='jf-main text-5xl font-sans'>JF</h1>
        <p className='jf-sub-text text-xl'>Admin</p>
      </div>

      <div className='option-container'>
        <Option id={optionIds["analytics"]} active={props.option === optionIds["analytics"] ? true : false}
        Logo={DataSaverOffIcon} title="Analytics" link="/" />

        <Option id={optionIds["seekers"]} active={props.option === optionIds["seekers"] ? true : false} Logo={AccountCircleRoundedIcon} title="Job Seekers" link="/job-seekers" />

        <Option id={optionIds["companies"]} active={props.option === optionIds["companies"] ? true : false}
        Logo={ApartmentIcon} title="Companies" lists={
          [{ name: "Option Number 1", link: "/" },
          { name: "Option Number 2", link: "/two" },
          { name: "Option Number 3", link: "/three" }]
        } link="/companies" />

        <Option id={optionIds["pricing"]} active={props.option === optionIds["pricing"] ? true : false}
        Logo={MonetizationOnOutlinedIcon} title="Pricing Plans" lists={
          [{ name: "Option Number 1", link: "/" },
          { name: "Option Number 2", link: "/two" },
          { name: "Option Number 3", link: "/three" }]
        } link="/pricing" />

        <Option id={optionIds["staff"]} active={props.option === optionIds["staff"] ? true : false}  Logo={InsertEmoticonOutlinedIcon} title="Staff" lists={
          [{ name: "Option Number 1", link: "/" },
          { name: "Option Number 2", link: "/two" },
          { name: "Option Number 3", link: "/three" }]
        } link="/staff" />

        <Option id={optionIds["settings"]} active={props.option === optionIds["settings"] ? true : false}
        Logo={SettingsOutlinedIcon} title="Site Settings" lists={
          [{ name: "Option Number 1", link: "/" },
          { name: "Option Number 2", link: "/two" },
          { name: "Option Number 3", link: "/three" }]
        } link="/settings" />
      </div>

      <hr />

      <div className="option rounded-lg mt-2 mb-2">
        <div className='text-container flex items-center gap-3'>
          <InfoOutlinedIcon className='option--logo' />
          <span className="option--text">Help</span>
        </div>
      </div>

      <div className="account mt-6 flex items-center border-2 border-solid border-white p-4">
        <div className="account--img mr-4">
          <img className="border-2 border-solid border-white rounded-full" src="https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg" alt="" />
        </div>

        <div className="account__text">
          <h3 className='text-white text-base'>Rahul Singh Rawat Rahul Singh Rawat</h3>
          <p className='text-base font-medium'>Super Admin</p>
        </div>
      </div>
    </div>
  )
}
