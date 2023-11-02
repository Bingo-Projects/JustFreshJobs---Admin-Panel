import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import Table from '../../../models/Table';

const items =[
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "normal_text", text: "Naukri Singh"},
    {type: "main_sub", main: "admin@gmail.com", sub: "+91 8574589658"},
    {type: "check_marks", objects: [{ name: "Email", check: true }, { name: "Phone", check: false}]},
    {type: "normal_text", text: "10/10/2002"},
    {type: "approve", approve_func: () => {}, cancel_func: () => {}}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "normal_text", text: "Naukri Singh"},
    {type: "main_sub", main: "admin@gmail.com", sub: "+91 8574589658"},
    {type: "check_marks", objects: [{ name: "Email", check: true }, { name: "Phone", check: false}]},
    {type: "normal_text", text: "10/10/2002"},
    {type: "approve", approve_func: () => {}, cancel_func: () => {}}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "normal_text", text: "Naukri Singh"},
    {type: "main_sub", main: "admin@gmail.com", sub: "+91 8574589658"},
    {type: "check_marks", objects: [{ name: "Email", check: true }, { name: "Phone", check: false}]},
    {type: "normal_text", text: "10/10/2002"},
    {type: "approve", approve_func: () => {}, cancel_func: () => {}}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "normal_text", text: "Naukri Singh"},
    {type: "main_sub", main: "admin@gmail.com", sub: "+91 8574589658"},
    {type: "check_marks", objects: [{ name: "Email", check: true }, { name: "Phone", check: false}]},
    {type: "normal_text", text: "10/10/2002"},
    {type: "approve", approve_func: () => {}, cancel_func: () => {}}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "normal_text", text: "Naukri Singh"},
    {type: "main_sub", main: "admin@gmail.com", sub: "+91 8574589658"},
    {type: "check_marks", objects: [{ name: "Email", check: true }, { name: "Phone", check: false}]},
    {type: "normal_text", text: "10/10/2002"},
    {type: "approve", approve_func: () => {}, cancel_func: () => {}}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "normal_text", text: "Naukri Singh"},
    {type: "main_sub", main: "admin@gmail.com", sub: "+91 8574589658"},
    {type: "check_marks", objects: [{ name: "Email", check: true }, { name: "Phone", check: false}]},
    {type: "normal_text", text: "10/10/2002"},
    {type: "approve", approve_func: () => {}, cancel_func: () => {}}
  ],
]

export default function Main() {
  return (
    <div className='p-5'>
      <div className="flex items-center justify-between">
        <div className="search-input flex items-center bg-white border-2 border-zinc-300">
          <SearchOutlinedIcon className='text-zinc-500' />
          <input
            type="text"
            className="outline-0 ml-2 w-full"
            placeholder='Search: #id, email, contact, name...'
          />
        </div>

        <div className="button-input flex items-center bg-white border-2 border-zinc-300" onClick={
          (e) => e.currentTarget.classList.toggle("active")
        }>
          <FilterAltRoundedIcon className='text-zinc-500' />
          <h2 className='text-zinc-500 ml-1'>Filters</h2>
        </div>
      </div>

      <Table titles={["Company Name", "Admin", "Contact", "Verified", "Date", "Action"]} items={items} />
    </div>
  )
}