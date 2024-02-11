import Table from "../../models/Table";
import Plan from "./Plan";

const items2 =[
  [
    {type: "normal_text", text: "diwali50"},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "12/10/2002"},
    {type: "status", active: false, secondary_text: "Paused"},
    {type: "normal_text", text: "20/10/2002"},
    {type: "normal_text", text: "20/11/2002"},
  ],
  [
    {type: "normal_text", text: "diwali50"},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "12/10/2002"},
    {type: "status", active: true},
    {type: "normal_text", text: "20/10/2002"},
    {type: "normal_text", text: "20/11/2002"},
  ],
  [
    {type: "normal_text", text: "diwali50"},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "12/10/2002"},
    {type: "status", active: true},
    {type: "normal_text", text: "20/10/2002"},
    {type: "normal_text", text: "20/11/2002"},
  ],
  [
    {type: "normal_text", text: "diwali50"},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "12/10/2002"},
    {type: "status", active: false, secondary_text: "Paused"},
    {type: "normal_text", text: "20/10/2002"},
    {type: "normal_text", text: "20/11/2002"},
  ],
]

export default function Main() {
  return (
    <div className='h-full p-6'>
      <div className="flex justify-between">
        <h1 className="section-head">Pricing Plans</h1>
        <h1 className="section-head bg-sky-600 border-sky-900 cursor-pointer">New</h1>
      </div>

      <div className="flex gap-4 flex-wrap">
        <Plan title="Starting Pack" active={false}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto eveniet ab illo adipisci veritatis molestias, voluptatum magni nulla dolores officiis, similique velit asperiores ea cupiditate ipsam? Culpa, doloremque a!"

          items={[
          {field: "field", value: "value"},
          {field: "field", value: "value"},
          {field: "field", value: "value"},
          {field: "field", value: "value"},
          {field: "field", value: "value"},
        ]}/>

        <Plan title="Business Pack" active={true}
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iusto eveniet ab illo adipisci veritatis molestias, voluptatum magni nulla dolores officiis, similique velit asperiores ea cupiditate ipsam? Culpa, doloremque a!"

          items={[
          {field: "Field", value: "Value"},
          {field: "field", value: "value"},
          {field: "field", value: "value"},
          {field: "field", value: "value"},
          {field: "field", value: "value"},
        ]}/>
      </div>

      <div className="flex justify-between mt-16">
        <h1 className="section-head">Discount Codes</h1>
        <h1 className="section-head bg-sky-600 border-sky-900 cursor-pointer">Add</h1>
      </div>
      <Table titles={["Coupon Code", "Created", "Updated", "Status", "Start Date", "End Date"]} className="pb-8 text-center" items={items2} />
    </div>
  )
}