import React, { useEffect, useRef, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";

function ImageItem(props: { name: string; logo: string; ip: string }) {
  return (
    <td className="p-4 name border-zinc-300">
      <div className="flex items-center">
        <img src={props.logo} alt="" className="w-10 h-10	rounded-full" />
        <div className="main-table--info ml-2">
          <h2 className="text-sm font-medium text-gray-900">{props.name}</h2>
          <p className="text-xs font-medium text-gray-500">
            IP <span>{props.ip}</span>
          </p>
        </div>
      </div>
    </td>
  );
}

function MainSubText(props: { main: string; sub: string }) {
  return (
    <td className="contact border-zinc-300">
      <h2 className="text-sm font-medium text-gray-900">{props.main}</h2>
      <p className="text-sm font-medium text-gray-400">{props.sub}</p>
    </td>
  );
}

function Status(props: { status: "active" | "suspend" }) {
  return (
    <td className="status border-zinc-300">
      <div
        className={` border-2 text-center text-sm p-1 font-medium rounded capitalize
    ${
      props.status === "active"
        ? "border-green-600 bg-green-200"
        : "border-yellow-600 bg-yellow-200"
    }`}
      >
        {props.status}
      </div>
    </td>
  );
}

function NormalText(props: { text: string }) {
  return (
    <td className="text-base border-zinc-300 font-medium text-gray-800 date">
      {props.text}
    </td>
  );
}

function CheckMarks(props: { objects: { name: string; check: boolean }[] }) {
  return (
    <td className="verified border-zinc-300">
      {props.objects?.map((obj) => (
        <div className="text-sm font-medium text-gray-500 flex items-center">
          {obj.name}
          {obj.check ? (
            <CheckCircleRoundedIcon className="text-green-600" />
          ) : (
            <CancelRoundedIcon className="text-red-600" />
          )}
        </div>
      ))}
    </td>
  );
}

function Approve(props: { cancle_func: any; approve_func: any }) {
  return (
    <td className="status border-zinc-300">
      <div
        className={` border-2 text-center mb-2 text-sm p-1 font-medium rounded capitalize cursor-pointer border-green-600 bg-green-200`}
        onClick={props.approve_func}
      >
        Approve
      </div>
      <div
        className={` border-2 border-red-600 bg-red-200 text-center text-sm p-1 font-medium cursor-pointer rounded capitalize`}
        onClick={props.cancle_func}
      >
        Reject
      </div>
    </td>
  );
}

export default function Table(props: { titles: String[]; items: any[] }) {
  const MAX_PAGE_GROUPS = 4;
  const VISIBLE_ENTRIES = 10;
  const entries = useRef(null);
  const [startingPage, setStartingPage] = useState(1);
  const TotalEntries = 10;
  const [TotalPages, setTotalPages] = useState(
    Math.ceil(TotalEntries / VISIBLE_ENTRIES)
  );

  useEffect(() => {
    if (entries.current) {
      const entryDiv = entries.current as HTMLDivElement;
      const input = entryDiv.querySelector("input") as HTMLInputElement;
      input.addEventListener("input", () => {
        let id = window.setTimeout(function () {}, 0);
        while (id--) {
          window.clearTimeout(id);
        }

        setTimeout(() => {
          if (parseInt(input.value) > 20 || parseInt(input.value) < 1) {
            input.value = "20";
            setTotalPages(TotalEntries / 20);
          }
          setTotalPages(Math.ceil(TotalEntries / parseInt(input.value)));
          setStartingPage(1);
        }, 1500);
      });

      input.addEventListener("focusout", () => {
        if (!parseInt(input.value)) {
          input.value = "10";
          setTotalPages(TotalEntries / 10);
        }
      });

      const upArrow = entryDiv.querySelector(".arrow-up") as HTMLButtonElement;
      upArrow.addEventListener("click", () => {
        if (parseInt(input.value) + 1 > 20) {
          input.value = "20";
          setTotalPages(Math.ceil(TotalEntries / 20));
        } else {
          const newVal = parseInt(input.value) + 1;
          input.value = newVal.toString();
          setTotalPages(Math.ceil(TotalEntries / newVal));
        }
        setStartingPage(1);
      });

      const downArrow = entryDiv.querySelector(
        ".arrow-down"
      ) as HTMLButtonElement;
      downArrow.addEventListener("click", () => {
        if (parseInt(input.value) - 1 < 1) {
          input.value = "1";
          setTotalPages(TotalEntries);
        } else {
          const newVal = parseInt(input.value) - 1;
          input.value = newVal.toString();
          setTotalPages(Math.ceil(TotalEntries / newVal));
        }
        setStartingPage(1);
      });
    }
  }, []);

  const genNumArray = (num: number) => {
    const array: Array<number> = [];

    let maxPage = num + MAX_PAGE_GROUPS;
    for (
      let i = num;
      i <= (maxPage > TotalPages ? TotalPages : maxPage - 1);
      i++
    ) {
      array.push(i);
    }
    return array;
  };

  const activatePage = (e: any) => {
    if (!entries.current) return;
    const activePage = (entries.current as HTMLDivElement).querySelector(
      ".page.active"
    ) as HTMLButtonElement;
    activePage?.classList.remove("active");
    e.currentTarget?.classList?.add("active");
  };

  const changePageForward = () => {
    if (!entries.current) return;
    const forwardBtn = (entries.current as HTMLDivElement).querySelector(
      ".forward"
    ) as HTMLButtonElement;
    const backwardBtn = (entries.current as HTMLDivElement).querySelector(
      ".back"
    ) as HTMLButtonElement;

    if (forwardBtn.classList.contains("disable")) return;
    const newSP = startingPage + MAX_PAGE_GROUPS;
    setStartingPage(newSP);

    if (
      newSP + MAX_PAGE_GROUPS - 1 === TotalPages ||
      genNumArray(newSP).length < MAX_PAGE_GROUPS
    ) {
      forwardBtn.classList.add("disable");
    }
    backwardBtn.classList.remove("disable");
  };

  const changePageBackward = () => {
    if (!entries.current) return;
    const forwardBtn = (entries.current as HTMLDivElement).querySelector(
      ".forward"
    ) as HTMLButtonElement;
    const backwardBtn = (entries.current as HTMLDivElement).querySelector(
      ".back"
    ) as HTMLButtonElement;

    if (backwardBtn.classList.contains("disable")) return;
    const newSP = startingPage - MAX_PAGE_GROUPS;
    setStartingPage(newSP || 1);

    if (newSP - 1 <= 1) {
      backwardBtn.classList.add("disable");
    }
    forwardBtn.classList.remove("disable");
  };

  console.log(props.items);

  return (
    <div id="table" className="main-table bg-white w-full h-full mt-6">
      <table className="w-full h-full">
        <thead>
          <tr className="border-2 border-zinc-300">
            {props.titles?.map((title) => (
              <th className="border-zinc-300">{title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {props.items?.map((item) => (
            <tr>
              {item?.map((data: any) => (
                <>
                  {data.type === "image_item" && (
                    <ImageItem name={data.name} ip={data.ip} logo={data.logo} />
                  )}
                  {data.type === "main_sub" && (
                    <MainSubText main={data.main} sub={data.sub} />
                  )}
                  {data.type === "status" && (
                    <Status status={data.active ? "active" : "suspend"} />
                  )}
                  {data.type === "normal_text" && (
                    <NormalText text={data.text} />
                  )}
                  {data.type === "check_marks" && (
                    <CheckMarks objects={data.objects} />
                  )}
                  {data.type === "approve" && (
                    <Approve approve_func={data.approve_func} cancle_func={data.cancel_func} />
                  )}
                </>
              ))}
              <td className="more border-zinc-300">
                <MoreVertRoundedIcon />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        className="border-2 border-zinc-300 border-t-0 flex w-full justify-between p-2 py-2.5"
        ref={entries}
      >
        <div className="flex items-center">
          <h2 className="text-sm font-medium text-gray-500 mr-4">
            Entries Per Page :
          </h2>
          <input
            type="number"
            defaultValue={10}
            className="border-gray-400 text-gray-500 rounded-md border text-center px-1 w-10 font-medium"
          />
          <div className="flex flex-col items-center ml-2">
            <KeyboardArrowUpIcon className="arrow-up text-gray-600 rounded-lg" />
            <KeyboardArrowDownIcon className="arrow-down text-gray-600 rounded-lg" />
          </div>
        </div>

        <div className="flex gap-4">
          <button className="back disable" onClick={changePageBackward}>
            <KeyboardArrowLeftIcon className="arrow-left" />
          </button>

          <div className="flex gap-2 items-center">
            {TotalPages &&
              genNumArray(startingPage).map((n) => (
                <button
                  onClick={activatePage}
                  key={n}
                  className={`page ${n === startingPage ? "active" : ""}`}
                >
                  {n}
                </button>
              ))}
          </div>

          <button
            className={`forward ${
              TotalPages <= MAX_PAGE_GROUPS ? "disable" : ""
            }`}
            onClick={changePageForward}
          >
            <KeyboardArrowRightIcon className="arrow-right" />
          </button>
        </div>
      </div>
    </div>
  );
}
