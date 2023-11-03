import React, { useState, useEffect } from 'react';
import moment from 'moment';

import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

import api from '../services/api';
import { arrayOfDates } from '../utils/Utils'

import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardCard01 from '../partials/dashboard/DashboardCard01';
import DashboardCard02 from '../partials/dashboard/DashboardCard02';
import DashboardCard06 from '../partials/dashboard/DashboardCard06';
import DashboardCard07 from '../partials/dashboard/DashboardCard07';

function Dashboard() {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [datesOfReadTemperatures, setDateOfReadTemperatures]= useState([]);

  useEffect(() => {
    async function fetchData(){
      const responseTemperature = await api.get('/temperature?dataIni=2023-11-01&dataFin=2023-11-05&code=nXpNMvtevtVyCGnifVWdSAsTK_CcZdOm_JTdN2wvTXq_AzFuY7eJkw==')
      const { temperatures } = responseTemperature.data;
      setDateOfReadTemperatures(arrayOfDates(temperatures));
    }
    fetchData();
  },[]);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              <DashboardCard01 dates={datesOfReadTemperatures} />
              {/* Line chart (Acme Advanced) */}
              <DashboardCard02 />
              {/* Doughnut chart (Top Countries) */}
              <DashboardCard06 />
              {/* Table (Top Channels) */}
              <DashboardCard07 />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;