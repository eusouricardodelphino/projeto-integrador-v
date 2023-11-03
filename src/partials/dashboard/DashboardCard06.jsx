import React from 'react';

function DashboardCard06() {
  return (
    <div className="col-span-full xl:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Últimas Temperaturas</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Data</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Hora</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Temperatura</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">On/Off</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">30.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:02</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">27°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">29.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:08</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">28°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">28.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:05</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">27°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">27.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:03</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">29°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">26.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:02</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">28°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">25.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:04  </div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">27°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800 dark:text-slate-100">24.10.2023</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">16:01</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-emerald-500">26°C</div>
                </td>
                <td className="p-2">
                  <div className="text-center">On</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard06;
