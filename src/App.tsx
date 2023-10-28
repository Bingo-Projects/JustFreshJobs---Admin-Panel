import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import "./css/app.css";
import { optionIds } from "./index";
import Analytics from "./routes/Analytics/Main";
import JobSeekers from "./routes/JobSeekers/Main";
import Companies from "./routes/Companies/Main/Main";
import CompaniesRegister from "./routes/Companies/Register/Register";
import CompaniesCampaign from "./routes/Companies/Campaign/Campaign";

function App(props: { option: string }) {
  return (
    <div className="App flex w-screen h-screen overflow-hidden">

      <Dashboard option={optionIds[props.option as keyof typeof optionIds]} />

      <div className="main-area flex items-start w-full flex-col overflow-y-scroll">
        <Header />

        <div className='w-full h-full option-holder'>
          {props.option === "analytics" && <Analytics />}
          {props.option === "seekers" && <JobSeekers />}
          {props.option === "companies" && <Companies />}
          {props.option === "companies_register" && <CompaniesRegister />}
          {props.option === "companies_campaign" && <CompaniesCampaign />}
        </div>
      </div>

    </div>
  );
}

export default App;
