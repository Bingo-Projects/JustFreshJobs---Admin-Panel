import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import "./css/app.css";
import { optionIds } from "./index";
import Analytics from "./routes/Analytics/Main";
import JobSeekers from "./routes/JobSeekers/Main";

function App(props: { option: string }) {
  return (
    <div className="App flex w-screen h-screen overflow-hidden">

      <Dashboard option={optionIds[props.option as keyof typeof optionIds]} />

      <div className="main-area flex items-start w-full flex-col overflow-y-scroll">
        <Header />

        <div className='w-full h-full option-holder'>
          {props.option === "analytics" && <Analytics />}
          {props.option === "seekers" && <JobSeekers />}
        </div>
      </div>

    </div>
  );
}

export default App;
