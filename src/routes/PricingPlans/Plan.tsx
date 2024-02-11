import React from "react";
import Edit from '@mui/icons-material/Edit';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Plan(props: { title: string, active: boolean, desc: string, items: any }) {
  return (
    <div className="mt-6">
      <div className="p-4 border-2 rounded-md border-zinc-300 bg-white w-96">
        <div className="flex items-center justify-between gap-6">
          <h1 className="title text-base font-medium text-gray-800">{props.title}</h1>
          <div className="flex items-center gap-2">
            <h1 className={`font-medium text-sm bg-${props.active?"green":"red"}-400  px-3 py-1 rounded-md`}>
              {props.active?"Active":"Inactive"}
            </h1>
            <Edit className="text-gray-500" />
            <HighlightOffIcon className="text-red-600" />
          </div>
        </div>

        <h4 className="text-sm my-2 text-gray-600">
          {props.desc}
        </h4>

        <div className="mt-4 gap-4 gap-x-6 grid grid-cols-2">
          {(props.items || []).map((item: { field: string, value: string }) => (
            <div className="flex items-center justify-between">
            <h4 className="font-medium text-sm bg-gray-200 px-3 py-1 text-gray-800">
              {item.field}
            </h4>
            <p>{item.value}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}


