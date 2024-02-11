import React from "react";
import Table from "../../models/Table";

const items = [
  [
    {
      type: "main_sub",
      main: "Rahul Singh Rawat",
      sub: "rahulsinghrawat@gmail.com",
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "approve",
      approve_text: "Edit",
      cancle_text: "Remove",
      cancle_func: () => {},
      approve_func: () => {}
    }
  ],
  [
    {
      type: "main_sub",
      main: "Rahul Singh Rawat",
      sub: "rahulsinghrawat@gmail.com",
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "approve",
      approve_text: "Edit",
      cancle_text: "Remove",
      cancle_func: () => {},
      approve_func: () => {}
    }
  ],
  [
    {
      type: "main_sub",
      main: "Rahul Singh Rawat",
      sub: "rahulsinghrawat@gmail.com",
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "approve",
      approve_text: "Edit",
      cancle_text: "Remove",
      cancle_func: () => {},
      approve_func: () => {}
    }
  ],
  [
    {
      type: "main_sub",
      main: "Rahul Singh Rawat",
      sub: "rahulsinghrawat@gmail.com",
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "check_box",
      event_func: ()=> {},
    },
    {
      type: "approve",
      approve_text: "Edit",
      cancle_text: "Remove",
      cancle_func: () => {},
      approve_func: () => {}
    }
  ],
];

export default function Main() {
  return (
    <>
      <Table
        titles={["Name", "Analytics", "Job", "Companies", "Pricing", "Settings", "Actions"]}
        className="w-11/12 mt-2 mb-2 mx-auto"
        items={items}
        more={false}
      />
    </>
  );
}
