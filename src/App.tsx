import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import "./css/app.css";
import { optionIds } from "./index";
import Analytics from "./routes/Analytics/Main";
import JobSeekers from "./routes/JobSeekers/Main";
import Companies from "./routes/Companies/Main";
import CompaniesRegister from "./routes/Companies/Register";
import CompaniesCampaign from "./routes/Companies/Campaign";
import PricingPlans from "./routes/PricingPlans/Main";
import Staff from "./routes/OtherAdmins/Main";
import Settings from "./routes/Settings/Main";

function App(props: { option: string }) {

  const [hide, setHide] = useState(false);

  return (
    <div className="App flex w-screen h-screen overflow-hidden">

      <Dashboard dashHide={hide} option={optionIds[props.option as keyof typeof optionIds]} />

      <div className="main-area flex items-start w-full flex-col overflow-y-auto">
        <Header dashToggle={() => setHide(!hide)} />

        <div className='w-full option-holder min-h-max h-full'>
          {props.option === "analytics" && <Analytics />}
          {props.option === "seekers" && <JobSeekers />}
          {props.option === "companies" && <Companies />}
          {props.option === "companies_register" && <CompaniesRegister />}
          {props.option === "companies_campaign" && <CompaniesCampaign />}
          {props.option === "pricing" && <PricingPlans />}
          {props.option === "staff" && <Staff />}
          {props.option === "settings" && <Settings />}
        </div>
      </div>

    </div>
  );
}

export default App;
