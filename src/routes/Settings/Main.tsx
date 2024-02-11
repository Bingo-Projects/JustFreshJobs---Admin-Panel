import React from "react";
import Logo from "./Logo";
import Table from "../../models/Table";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const items = [
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
  [
    { type: "normal_text", text: "Java" },
    { type: "normal_text", text: "A" },
  ],
];

export default function Main() {
  return (
    <div className="h-full p-6">
      <div className="flex justify-between">
        <h1 className="section-head">Client Logos</h1>
        <h1 className="section-head bg-sky-600 border-sky-900 cursor-pointer">
          Add Logo
        </h1>
      </div>

      <div className="flex mt-10 gap-10 flex-wrap">
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
        <Logo />
      </div>

      <div className="flex justify-between mt-14">
        <h1 className="section-head">Skills</h1>
        <h1 className="section-head bg-sky-600 border-sky-900 cursor-pointer">
          Add Skill
        </h1>
      </div>

      <div className="search-div mt-4 flex gap-x-2">
        <div className="bg-white w-1/4 flex items-center gap-x-2 border-2 border-gray-400 rounded px-2 py-1">
          <SearchOutlinedIcon style={{ fontSize: "20px"}} className="text-gray-700" />
          <input type="text" placeholder="Search Skill..." className="text-base" />
        </div>

        <div className="bg-white w-fit flex items-center gap-x-2 border-2 border-gray-400 rounded px-2 py-1">
          <p className="font-medium">Grade:</p>
          <select className="cursor-pointer text-blue-900 font-medium">
            <option value="a">A</option>
            <option value="b">B</option>
          </select>
        </div>

        <button className="bg-yellow-400 px-4 rounded text-sm font-medium border-2 border-yellow-700 ">Search</button>
      </div>

      <Table
        titles={["Skill", "Grade"]}
        className="pb-8 text-center"
        items={items}
      />

      <div className="flex justify-between mt-14">
        <h1 className="section-head">Site Info</h1>
        <h1 className="section-head bg-sky-600 border-sky-900 cursor-pointer">
          Save All
        </h1>
      </div>
    </div>
  );
}
