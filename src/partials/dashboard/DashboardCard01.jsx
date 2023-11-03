import React from 'react';
import { BsThermometerHalf } from 'react-icons/bs';
import LineChart from '../../charts/LineChart01';
import Icon from '../../images/icon-01.svg';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard01({ dates }) {

  console.log(dates);

  const chartData = {
    labels: [
      '01-10-2023',
      '02-10-2023',
      '03-10-2023',
      '04-10-2023',
      '05-10-2023',
      '06-10-2023',
      '07-10-2023',
      '08-10-2023',
      '09-10-2023',
      '10-10-2023',
      '11-10-2023',
      '12-10-2023',
      '13-10-2023',
      '14-10-2023',
      '15-10-2023',
      '16-10-2023',
      '17-10-2023',
      '18-10-2023',
      '19-10-2023',
      '20-10-2023',
      '21-10-2023',
      '22-10-2023',
      '23-10-2023',
      '24-10-2023',
      '25-10-2023',
      '26-10-2023',
      '27-10-2023',
      '28-10-2023',
      '29-10-2023',
      '30-10-2023',
    ],
    datasets: [
      // Indigo line
      {
        data: [25, 26, 27, 27, 26, 27, 27, 28, 27, 26, 25, 25, 26, 27, 27, 27, 28, 29, 28, 25, 26, 27, 26, 26, 27, 28,29, 27, 28, 27],
        fill: true,
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.08)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <BsThermometerHalf size={24} />
         
        </header>
        <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Temperatura</h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-2">26,8 °C</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow max-sm:max-h-[128px] xl:max-h-[128px]">
        {/* Change the height attribute to adjust the chart height */}
        <LineChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard01;
