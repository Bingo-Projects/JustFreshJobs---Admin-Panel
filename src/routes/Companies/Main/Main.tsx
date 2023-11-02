import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import Table from '../../../models/Table';

const items =[
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: true},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: true},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: true},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: true},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: false},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: true},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: false},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
  [
    {type: "image_item", name: "JustFreshJob (JFJ)", ip: "192.168.1.1", logo: "https://thelogocompany.net/wp-content/uploads/2023/05/tlc-icon.jpg"},
    {type: "main_sub", main: "Hired: 40", sub: "Campaigns: 20"},
    {type: "status", active: true},
    {type: "normal_text", text: "10/10/2002"},
    {type: "normal_text", text: "$ 20,000"}
  ],
]


export default function Main() {
  return (
    <div id="job-seekers" className='p-5'>
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

      <Table titles={["Company Name", "Performance", "Status", "Date", "Purchase"]} items={items} />
    </div>
  )
}