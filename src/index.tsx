import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const optionIds = {
  "analytics": "analytics",
  "seekers": "seekers",
  "companies": "companies",
  "pricing": "pricing",
  "staff": "staff",
  "settings": "settings"
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App option={optionIds["analytics"]} />}></Route>
      <Route path="/job-seekers" element={<App option={optionIds["seekers"]} />}></Route>
      <Route path="/companies" element={<App option={optionIds["companies"]} />}></Route>
      <Route path="/pricing" element={<App option={optionIds["pricing"]} />}></Route>
      <Route path="/staff" element={<App option={optionIds["staff"]} />}></Route>
      <Route path="/settings" element={<App option={optionIds["settings"]} />}></Route>
    </Routes>
  </BrowserRouter>
);

