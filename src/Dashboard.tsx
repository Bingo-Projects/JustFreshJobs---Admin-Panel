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


type Lists = { name: string, link: string };

function Option(props: { Logo: typeof DataSaverOffIcon, title: string, lists?: Lists[] }) {
  const option: any = useRef(null);

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
    }

    target.classList.add("active");
  }

  const clickLink = (e: any): void => {
    const target = e?.currentTarget as HTMLDivElement;
    const activeList = option?.current?.querySelector("li.active") as HTMLDivElement;
    if (activeList) {
      activeList.classList.remove("active");
    }
    target.classList.add("active");
    option.current.querySelector(".option--text")?.classList.remove("font-medium");
    option.current.querySelector(".option--text")?.classList.add("font-light");
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
    <div ref={option} className="option rounded-lg mt-2 mb-2" onClick={clickOption}>
      <div className='text-container flex items-center gap-3'>
        <props.Logo className='option--logo' />
        <span className="option--text font-light">{props.title}</span>
        {props.lists && props.lists.length > 1 && <ArrowDropDownOutlinedIcon className='dropdown' onClick={toggleList} />}
      </div>

      {props.lists && <ul className="option--sub hide">
        {props.lists?.map((list: Lists, key: number) => (
          <li onClick={clickLink} key={key}>{list.name}</li>
        ))}
      </ul>
      }
    </div>
  )
}


export default function Dashboard() {
  return (
    <div className='dashboard bg-main-bg w-max p-3'>
      <div className="main-frame flex items-center gap-3">
        <h1 className='jf-main text-5xl font-sans'>JF</h1>
        <p className='jf-sub-text text-xl'>Admin</p>
      </div>

      <div className='option-container'>
        <Option Logo={DataSaverOffIcon} title="Analytics" />

        <Option Logo={AccountCircleRoundedIcon} title="Job Seekers" lists={
          [{ name: "Option Number 1", link: "" }, { name: "Option Number 2", link: "" }, { name: "Option Number 3", link: "" }]
        } />

        <Option Logo={ApartmentIcon} title="Companies" lists={
          [{ name: "Option Number 1", link: "" }, { name: "Option Number 2", link: "" }, { name: "Option Number 3", link: "" }]
        } />

        <Option Logo={MonetizationOnOutlinedIcon} title="Pricing Plans" lists={
          [{ name: "Option Number 1", link: "" }, { name: "Option Number 2", link: "" }, { name: "Option Number 3", link: "" }]
        } />

        <Option Logo={InsertEmoticonOutlinedIcon} title="Staff" lists={
          [{ name: "Option Number 1", link: "" }, { name: "Option Number 2", link: "" }, { name: "Option Number 3", link: "" }]
        } />

        <Option Logo={SettingsOutlinedIcon} title="Site Settings" lists={
          [{ name: "Option Number 1", link: "" }, { name: "Option Number 2", link: "" }, { name: "Option Number 3", link: "" }]
        } />
      </div>

      <hr />

      <div className="option rounded-lg mt-2 mb-2">
        <div className='text-container flex items-center gap-3'>
          <InfoOutlinedIcon className='option--logo' />
          <span className="option--text">Help</span>
        </div>
      </div>
    </div>
  )
}
